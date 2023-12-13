import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_dejar_guardar_receta_invalid1(): #test con usuario incorrecto
    user = "UsuarioQueNoExisteImposible" #no existe
    receta = "Ensalada Cesar"
    response = requests.put(f"{API_URL}/dejar_de_guardar/{user}/{receta}/")
    assert "422" in response.text

def test_put_dejar_guardar_receta_invalid2(): #test con receta incorrecta
    user = "Asier" 
    receta = "Ensalada Que No Existe" #no existe
    response = requests.put(f"{API_URL}/dejar_de_guardar/{user}/{receta}/")
    assert "422" in response.text

def test_put_dejar_guardar_receta_invalid3(): #test con usuario correcto pero intentando eliminar receta que no tiene guardada
    user = "Asier" 
    receta = "Pato Pekin" #no existe en el usuario Asier
    response = requests.put(f"{API_URL}/dejar_de_guardar/{user}/{receta}/")
    assert "422" in response.text