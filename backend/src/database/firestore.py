import os
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth, storage
from fuzzywuzzy import fuzz, process

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
    print(filtro)

    recetas_ref = db.collection("receptes")
    query = recetas_ref

    if filtro['user'] is not None:
        query = query.where("user", "==", filtro['user'])
    if filtro["classe"] is not None:
        clases = [filtro["classe"],filtro["classe"].lower()]
        query = query.where("classe", "in", clases)
    if filtro["tipo"] != []:
        tipos = []
        for t in filtro["tipo"]:
            tipos.append(t)
            tipos.append(t.lower())
        query = query.where("tipo", "in", tipos)
    if filtro["ingredientes"] != []:
        for ingrediente in filtro["ingredientes"]:
            query = query.where("ingredientes", "array_contains", ingrediente)
    if filtro["time"] is not None:
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


def busca_recetas(cadena):
    coleccion = db.collection("receptes")
    recetas = coleccion.stream()

    data = [doc.to_dict() for doc in recetas]
    resultados = []
    for doc in data:
        if cadena in doc["nombre"]:
            resultados.append(doc)

    if len(resultados) > 0:
        return resultados
    else:
        nombres = [doc["nombre"] for doc in data]
        respuesta = process.extract(cadena, nombres, limit=10)

        for i in range(10):
            name = respuesta[i][0]
            query = coleccion.where("nombre","==",name)
            ret = query.stream()
            rec = [doc.to_dict() for doc in ret]
            resultados.append(rec[0])

        return resultados

        

def getRecipeImages(recepta): 
    # Conecta al bucket de almacenamiento
    bucket = storage.bucket()
    folder_path = ruta_recetas + recepta
    blob = bucket.blob(prefix=folder_path)

    # Genera la URL del blob
    image_url = blob.public_url
    # Devuelve la lista de URLs de imágenes
    return image_url

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
        return 200
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
    if user.userID == user_id:
        # Actualiza los campos del usuario
        user.email = updated_user.email
        user.password = updated_user.password
        return {"message": "Usuario actualizado con éxito"}

    return {"error": "Usuario no encontrado"}