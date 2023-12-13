import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_get_receta_valid1():
    name = "Ensalada Cesar"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text

def test_get_receta_valid2():
    name = "1234"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text

def test_get_receta_valid3():
    name = "Test Prueba 12345"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text