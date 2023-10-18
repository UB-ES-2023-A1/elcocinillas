import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate('backend\\src\\database\\elcocinillas.json')
firebase_admin.initialize_app(cred)
db = firestore.client()    

def create_recepta(recepta):
    doc_ref = db.collection(u'receptes').document()
    doc_ref.set(recepta)

def get_receptes():
    receptes = db.colletion(u'receptes').stream()
    resultat = []
    for recepta in receptes:
        resultat.append(recepta.to_dict())

def login(email, passwd):
    try:
        user = auth.get_user_by_email(email)
        # Comprueba la contraseña
        user = auth.update_user(user.uid, password=passwd)
        #Exito return

    except ValueError as e:
        return f"Error en el registro: {str(e)}"
    except auth.EmailAlreadyExistsError as e:
        return f"El correo ya está registrado: {str(e)}"
    except Exception as e:
        return f"Error desconocido: {str(e)}"

def signup(mail, passwd, username):
    try:
        # Crea un nuevo usuario con correo y contraseña
        user = auth.create_user(
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
    
