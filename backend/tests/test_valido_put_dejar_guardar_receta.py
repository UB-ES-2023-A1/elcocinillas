import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_crear_receta_guardada_test(): #test de prueba solo para crear una receta guardada de testeo
    user = "kobos"
    recipe = "Pato Pekin"
    response = requests.put(f"{API_URL}/guardar/{user}/{recipe}/")
    assert "200" in response.text

def test_put_dejar_guardar_receta_valid1(): #test con receta incorrecta
    user = "kobos" 
    receta = "Pato Pekin" #no existe
    response = requests.put(f"{API_URL}/dejar_de_guardar/{user}/{receta}/")
    assert "200" in response.text