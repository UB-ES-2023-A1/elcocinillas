import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_put_guardar_receta_valid1(): #test correcto guardar receta
    user = "Asier"
    recipe = "Ensalada Cesar"
    response = requests.put(f"{API_URL}/guardar/{user}/{recipe}/")
    assert "200" in response.text

def test_eliminar_receta_guardada(): #test correcto guardar receta
    user = "Asier"
    receta = "Ensalada Cesar"
    response = requests.put(f"{API_URL}/dejar_de_guardar/{user}/{receta}/")
    assert "200" in response.text