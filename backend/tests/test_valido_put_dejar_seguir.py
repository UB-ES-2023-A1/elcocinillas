import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
#------------------------------------------------------------------------------------


#primero nos aseguramos que Asier siga a Marc
def test_seguirUsuariosPrimero(): 
    user = "Asier"
    following = "Marc"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "200" in response.text


#ahora que sabemos que Asier sigue a Marc, vamos a hacer que Asier deje de seguir a Marc.
def test_put_dejar_seguir_valid1(): #user correcto quiere dejar de seguir a user correcto
    user = "Asier"
    unfollowing = "Marc"
    response = requests.put(f"{API_URL}/dejar_seguir/{user}/{unfollowing}")
    assert "200" in response.text
