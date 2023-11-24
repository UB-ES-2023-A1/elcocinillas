import firebase_admin
from firebase_admin import credentials, auth

# Inicializa la aplicación Firebase con tus credenciales
current_directory = os.path.dirname(__file__)
file_path = os.path.join(current_directory, 'elcocinillas.json')
firebase_admin.initialize_app(file_path)

import requests

API_URL = "http://127.0.0.1:8000"
#"userID": "testcorrecto2", "email": "buenas@yahoo.com", "password": "123456"
#TEST:
def test_post_receta_invalid1():
    receta = {
  "user": "",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid2():
    receta = {
  "user": "testcorrecto2",
  "nombre": "",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid3():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid4():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid5():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    ""
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid6():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    ""
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid7():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    ""
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text

def test_post_receta_invalid8():
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "ejemplo",
  "tipo": "ejemplo",
  "ingredientes": [
    "ejemplo"
  ],
  "pasos": [
    "ejemplo"
  ],
  "images": [
    "ejemplo"
  ],
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert "422" in response.text