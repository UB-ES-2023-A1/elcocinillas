import os
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth, storage
from fuzzywuzzy import fuzz, process
import uuid

current_directory = os.path.dirname(__file__)
file_path = os.path.join(current_directory, 'elcocinillas.json')

cred = credentials.Certificate(file_path)

ruta_recetas = "imgRecetas/"
firebase_admin.initialize_app(cred, {
    'storageBucket': 'elcocinillas-93ebe.appspot.com'
})

db = firestore.client()    

def create_recepta(recepta):
    try:
        doc_ref = db.collection(u'receptes').document(recepta.nombre)
        doc_ref.set(recepta.__dict__)
        return 200
    except Exception as e:
        print(f"Error al crear la recepta: {e}")
        return -1

def get_all_recipes():
    coleccion = db.collection("receptes")
    recetas = coleccion.stream()

    data = [doc.to_dict() for doc in recetas]

    return data

def get_receptes(filtro):

    recetas_ref = db.collection("receptes")
    query = recetas_ref

    if filtro['user'] is not None:
        query = query.where("user", "==", filtro['user'])
    if filtro["tipo"] is not None:
        tipos = [filtro["tipo"],filtro["tipo"].lower()]
        query = query.where("tipo", "in", tipos)
    if filtro["classe"] != []:
        classes = []
        for f in filtro["classe"]:
            classes_filtro = f.split(",")
            for c in classes_filtro:
                classes.append(c)
                classes.append(c.lower())
        query = query.where("classe", "in", classes)
    if filtro["ingredientes"] != []:
        for ingrediente in filtro["ingredientes"]:
            query = query.where("ingredientes", "array_contains", ingrediente)
    if filtro["time"] != 0:
        query = query.where("time", "<=", filtro["time"])
    if filtro["dificultad"] is not None:
        query = query.where("dificultad", "==", filtro["dificultad"])

    result = query.stream()
    recetas = [receta.to_dict() for receta in result]

    if recetas.count == 0:
        return -1
    return recetas

def get_recepta(name_recepta):
    doc_ref = db.collection("receptes").document(name_recepta)

    doc = doc_ref.get()
    if doc.exists:
        resposta = doc.to_dict()

        bucket = storage.bucket()
        blob = bucket.blob(ruta_recetas + name_recepta)
        resposta['images'] = [blob.generate_signed_url(method='GET', expiration=3600)]

        return resposta
    else:
        print("No such document!")
        return -1

def get_imagenes_receta(uuid):
    bucket = storage.bucket()
    prefix = ruta_recetas + uuid + "/"
    blobs = bucket.list_blobs(prefix=prefix)
    images_urls =[]

    for blob in blobs:
        image_url = blob.generate_signed_url(expiration=180)
        images_urls.append(image_url)

    return images_urls


def busca_recetas(cadena, distancia = 50):

    coleccion = db.collection("receptes")
    recetas = coleccion.stream()

    data = [doc.to_dict() for doc in recetas]
    resultados = []

    nombres = [doc["nombre"] for doc in data]
    respuesta = process.extract(cadena, nombres, limit=len(nombres))

    for name, score in respuesta:
        if score >= distancia:
            query = coleccion.where("nombre", "==", name)
            ret = query.stream()
            rec = [doc.to_dict() for doc in ret]
            resultados.append(rec[0])

    return resultados

def updateImg(receta):
    doc_ref = db.collection("receptes").document(receta['nombre'])

    try:
        # Actualiza los datos del documento
        doc_ref.update(receta)
        print("Documento actualizado con éxito")
        return 200
    except Exception as e:
        print(f"Error al actualizar el documento: {e}")
        return -1

#images list{ruta_local_img}
def uploadImg(nombre, file):
    try:
        bucket = storage.bucket()
        blob = bucket.blob(ruta_recetas + nombre)

        blob.upload_from_string(file, content_type="image/jpeg")
        blob.make_public()

        return blob.public_url
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        print(f"Error al subir imagen a Firebase Storage: {str(e)}")
        # Puedes registrar el error en un sistema de registro aquí si lo deseas
        return -1  # Devuelve None o un valor de error apropiado en caso de fallo


def signup(mail, passwd, username):
    try:
        # Crea un nuevo usuario con correo y contraseña
        user = auth.create_user(
            uid=username,
            email = mail, 
            password = passwd
            )
        return "200"
    except ValueError as e:
        return f"Error en el registro: {str(e)}"
    except auth.EmailAlreadyExistsError as e:
        return f"El correo ya está registrado: {str(e)}"
    except Exception as e:
        return f"Error desconocido: {str(e)}"
    

def get_user(username):
    doc_ref = auth.get_user(username)

    if doc_ref:
        user_data = {
            "uid": doc_ref.uid,
            "email": doc_ref.email,
        }
        return user_data
    else:
        return {"error": "Usuario no encontrado"}

def update_user(user_id, updated_user):
    user = auth.get_user(user_id)
    new_user = auth.update_user(user_id, email = updated_user.email, password=updated_user.password)
    return new_user

def follow_user(user,follow):
    doc_ref = db.collection("followers").document(user)
    doc = doc_ref.get()

    if doc.exists:
        lista = doc.get("Following")
        lista.append(follow)
        doc_ref.update({"Following":lista})

    else:
        coleccion_ref = db.collection("followers")
        new_doc = coleccion_ref.document(user)
        new_doc.set({"Following":[follow]})

def unfollow_user(user,unfollow):
    doc_ref = db.collection("followers").document(user)
    doc = doc_ref.get()

    if doc.exists:
        lista = doc.get("Following")
        if unfollow in lista:
            lista.remove(unfollow)
            doc_ref.update({"Following": lista})



def get_following(user):
    doc_ref = db.collection("followers").document(user)
    doc = doc_ref.get()

    if doc.exists:
        lista = doc.get("Following")
        return lista
    else:
        return []
      
def delete_recipe(recipe_name):
    doc_ref = db.collection("receptes")
    query = doc_ref.where("nombre","==",recipe_name)
    docs = query.stream()

    for doc in docs:
        doc.reference.delete()

def valorar_receta(receta, valoracion):
    if (valoracion >= 0 and valoracion <= 5):
        doc_ref = db.collection(u'receptes').document(receta)
        doc = doc_ref.get()
        if doc.exists:
            val = doc.get("valoracion_media")
            num = doc.get("num_valoraciones")
            val = val*num + valoracion
            new_num = num + 1
            new_val = val/new_num
            doc_ref.update({"valoracion_media": new_val,"num_valoraciones": new_num})

def unsave_recipe(user,recipe):
    doc_ref = db.collection("recetas_guardadas").document(user)
    doc = doc_ref.get()

    if doc.exists:
        lista = doc.get("Recetas")
        if recipe in lista:
            lista.remove(recipe)
            doc_ref.update({"Recetas": lista})