
import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_post_comment_invalid1(): #test con receta incorrecta, texto correcto y user válido.
    comment = {
  "Receta": "RecetaQueNoExiste",
  "Texto": "Muy buena receta, fácil de hacer y se disfruta mucho el resultado!!",
  "User": "Asier"
}
    response = requests.post(f"{API_URL}/comment/", json=comment)
    assert "422" in response.text

def test_post_comment_invalid2(): #test con receta correcta, texto incorrecto (muy largo, intentando superar el numero maximo para hacer overflow) y user válido.
    comment = {
  "Receta": "Crepes",
  "Texto": "Muy buena receta, fácil de hacer y se disfruta mucho el resultado!!",
  "User": "UsuarioQueNoExiste"
}
    response = requests.post(f"{API_URL}/comment/", json=comment)
    assert "422" in response.text