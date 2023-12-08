import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_delete_receta_valid1(): #eliminar una receta que sí existe
    nombre_receta = "Prueba3"
    response = requests.delete(f"{API_URL}/eliminar_receta/{nombre_receta}")
    assert "200" in response.text