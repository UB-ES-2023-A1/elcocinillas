import firebase_admin
from firebase_admin import credentials, auth

# Inicializa la aplicación Firebase con tus credenciales
cred = credentials.Certificate('..\\src\\database\\elcocinillas.json')
firebase_admin.initialize_app(cred)

import requests

API_URL = "http://127.0.0.1:8000"

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
