from firebase_admin import auth
import requests

API_URL = "http://127.0.0.1:8000"
#TESTS CORRECTOS:
def test_register_user1():
    # Especifica el UID del usuario que deseas eliminar
    user_data = {
        "userID": "testcorrecto1",
        "email": "buenasE@gmail.com",
        "password": "123456"
    }
    
    response = requests.post(f"{API_URL}/register/", json=user_data)
    response_data = response.json()
    assert "Success" in response_data, response_data

    user_ID = { 
        "uid": "testcorrecto1"
    }
    #response = request.delete(f"{API_URL}/eliminarUsuario/"+user_ID["userID"])