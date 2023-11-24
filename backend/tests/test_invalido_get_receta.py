

import requests

API_URL = "http://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io"

#TESTS INCORRECTOS:
def test_get_receta_invalid1():
    name = "    "
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "-1" in response.text

def test_get_receta_invalid2():
    name = "AlgoQueNoExiste"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "-1" in response.text

def test_get_receta_invalid3():
    name = ""
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "-1" in response.text
