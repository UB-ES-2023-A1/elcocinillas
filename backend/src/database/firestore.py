import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth, storage
import requests

cred = credentials.Certificate('backend\\src\\database\\elcocinillas.json')

ruta_recetas = "imgRecetas/"
firebase_admin.initialize_app(cred, {
    'storageBucket': 'elcocinillas-93ebe.appspot.com'
})

db = firestore.client()    

def create_recepta(recepta):
    try:
        doc_ref = db.collection(u'receptes').document(recepta.nombre)
        doc_ref.set(recepta)

        uploadImg(recepta)
        return 0
    except Exception as e:
        print(f"Error al crear la recepta: {e}")

def get_receptes(filtro):

    recetas_ref = db.collection("recetas")
    query = recetas_ref

    if filtro.user:
        query = query.where("user", "==", filtro.user)
    if filtro.classe:
        query = query.where("classe", "==", filtro.classe)
    if filtro.tipo:
        query = query.where("tipo", "==", filtro.tipo)
    if filtro.ingredientes:
        for ingrediente in filtro.ingredientes:
            query = query.where("ingredientes", "array_contains", ingrediente)
    if filtro.time:
        query = query.where("time", "==", filtro.time)
    if filtro.dificultad:
        query = query.where("dificultad", "==", filtro.dificultad)

    result = query.stream()
    recetas = [receta.to_dict() for receta in result]

    return recetas

def get_recepta(name_recepta):
    doc_ref = db.collection("receptes").document(name_recepta)

    doc = doc_ref.get()
    if doc.exists:
        return doc.to_dict()
    else:
        print("No such document!")

#images list{ruta_local_img}
def uploadImg(recepta):

    bucket = storage.bucket()
    blob = bucket.blob(ruta_recetas + recepta.nombre)

    for ruta in recepta.images:
        blob.upload_from_filename(ruta)


def signup(mail, passwd, username):
    try:
        # Crea un nuevo usuario con correo y contraseña
        user = auth.create_user(
            uid=username,
            email = mail, 
            password = passwd
            )
        return user
    except ValueError as e:
        return f"Error en el registro: {str(e)}"
    except auth.EmailAlreadyExistsError as e:
        return f"El correo ya está registrado: {str(e)}"
    except Exception as e:
        return f"Error desconocido: {str(e)}"
    
