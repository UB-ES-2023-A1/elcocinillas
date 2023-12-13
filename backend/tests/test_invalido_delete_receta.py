import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_delete_receta_invalid1(): #intentar eliminar receta que no existe
    nombre_receta = "Receta Que No Existe"
    response = requests.delete(f"{API_URL}/eliminar_receta/{nombre_receta}")
    assert "422" in response.text
