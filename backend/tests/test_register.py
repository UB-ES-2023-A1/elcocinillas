import firebase_admin
from firebase_admin import credentials, auth
import os

# Inicializa la aplicación Firebase con tus credenciales
current_directory = os.path.dirname(__file__)
file_path = os.path.join(current_directory, 'elcocinillas.json')
firebase_admin.initialize_app(file_path)

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_register_user1():
    # Especifica el UID del usuario que deseas eliminar
    uid = 'testcorrecto1'

    # Elimina el usuario
    try:
        auth.delete_user(uid)
        print(f'Usuario con UID {uid} eliminado correctamente.')
    except auth.AuthError as e:
        print(f'Error al eliminar el usuario: {e}')

    user_data = {
        "userID": "testcorrecto1",
        "email": "buenasE@gmail.com",
        "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=user_data)
    response_data = response.json()
    assert "Success" not in response_data, response_data