
import requests

API_URL = "http://127.0.0.1:8000"


#TESTS INCORRECTOS:
#------------------------------------------------------------------------------------


#primero nos aseguramos que Asier siga a Marc
def test_seguirUsuariosPrimero(): 
    user = "Asier"
    following = "Marc"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "200" in response.text


#ahora nos aseguramos de que Asier NO sigue a Marc
def test_dejarDeSeguirUsuarioSegundo(): #user correcto quiere dejar de seguir a user correcto
    user = "Asier"
    unfollowing = "Marc"
    response = requests.put(f"{API_URL}/dejar_seguir/{user}/{unfollowing}")
    assert "200" in response.text


#ahora es cuando intentamos volver a dejar de seguir a Marc (cuando en realidad ya no le sigo)
def test_put_dejar_seguir_invalid1(): #intentar dehar de seguir a alguien que no sigues desde un inicio
    user = "Asier"
    unfollowing = "Marc"
    response = requests.put(f"{API_URL}/dejar_seguir/{user}/{unfollowing}")
    assert "200" in response.text