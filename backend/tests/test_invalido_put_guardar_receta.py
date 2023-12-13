import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_guardar_receta_invalid1(): #test con usuario incorrecto
    user = "UsuarioQueNoExisteImposible" #no existe
    recipe = "Ensalada Cesar"
    response = requests.put(f"{API_URL}/guardar/{user}/{recipe}/")
    assert "422" in response.text

def test_put_guardar_receta_invalid2(): #test con receta incorrecta
    user = "Asier" 
    recipe = "RecetaQueNoExisteImposible" #no existe
    response = requests.put(f"{API_URL}/guardar/{user}/{recipe}/")
    assert "422" in response.text

