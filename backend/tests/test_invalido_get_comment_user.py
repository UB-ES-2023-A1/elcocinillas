
import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_get_coment_user_invalid1(): #recuperar comentario normal y corriente (todo bien)
    user = "UsuarioQueNoExisteNiDeCoña"
    response = requests.get(f"{API_URL}/comments_by_user/{user}")
    assert "[]" in response.text
