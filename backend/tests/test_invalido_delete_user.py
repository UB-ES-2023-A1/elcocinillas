import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_get_receta_valid1():
    nombre_usuario = "UsuarioQueSeguroNoExiste"
    response = requests.delete(f"{API_URL}/eliminar_cuenta/{nombre_usuario}")
    assert "422" in response.text
