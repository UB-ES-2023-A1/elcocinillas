
import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_seguir_invalid1(): #intentar que un usuario que exista siga a un usuario que no existe
    user = "usuarioQueNoExiste"
    following = "Asier"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "422" in response.text

def test_put_seguir_invalid2(): #intentar seguir a alguien que no existe
    user = "Asier"
    following = "usuarioQueNoExiste"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "422" in response.text

def test_put_seguir_invalid3(): #intentar seguirse a si mismo
    user = "Asier"
    following = "Asier"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "422" in response.text