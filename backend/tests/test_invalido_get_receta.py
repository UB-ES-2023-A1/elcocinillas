

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_get_receta_invalid1():
    name = "    "
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "422" in response.text

def test_get_receta_invalid2():
    name = "AlgoQueNoExiste"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "422" in response.text
