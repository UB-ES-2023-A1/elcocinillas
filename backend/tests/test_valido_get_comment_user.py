
import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_get_coment_user_valid1(): #recuperar comentario normal y corriente (todo bien)
    user = "Asier"
    response = requests.get(f"{API_URL}/comments_by_user/{user}")
    assert "Muy buena receta" in response.text

def test_get_coment_user_valid2(): #recuperar comentario de un usuario que no ha hecho comentarios
    user = "kobos"
    response = requests.get(f"{API_URL}/comments_by_user/{user}")
    assert "[]" in response.text