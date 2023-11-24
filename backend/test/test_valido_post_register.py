import firebase_admin
from firebase_admin import credentials, auth

# Inicializa la aplicación Firebase con tus credenciales
cred = credentials.Certificate('..\\src\\database\\elcocinillas.json')
firebase_admin.initialize_app(cred)

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_post_register_valid1():
    registro = {
       "userID": "testcorrecto1", "email": "buenasREPE@gmail.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_valid2():
    registro = {
        "userID": "testcorrecto2", "email": "buenas@yahoo.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_valid3():
    registro = {
        "userID": "testcorrecto3", "email": "buenas@yahoo.es", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_valid4():
    registro = {
       "userID": "testcorrecto4", "email": "buenas@yahoo.qwer", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_valid5():
    registro = {
        "userID": "testcorrecto5", "email": "test.ub@alumnes.ub.edu", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_valid6():
    registro = {
        "userID": "testcorrecto6", "email": "papishulo@gmail.com", "password": "Z?$xcvpAssW0rd!"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text