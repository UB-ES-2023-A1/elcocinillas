

import requests

API_URL = "http://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io"
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