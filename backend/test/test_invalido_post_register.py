import firebase_admin
from firebase_admin import credentials, auth

# Inicializa la aplicación Firebase con tus credenciales
cred = credentials.Certificate('..\\src\\database\\elcocinillas.json')
firebase_admin.initialize_app(cred)

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_post_register_invalid1():
    registro = {
       "nombre": "testIncorrecto1", "email": "buenasREPE@gmail.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid2():
    registro = {
       "nombre": "testIncorrecto2", "email": "mal_formato", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid3():
    registro = {
       "nombre": "testIncorrecto3", "email": "mal_formato@", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text
def test_post_register_invalid4():
    registro = {
       "nombre": "testIncorrecto4", "email": "mal_formato@qwer", "password" : "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid5():
    registro = {
       "userID": "testIncorrecto5", "email": "mal_formato@qwer.a", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid6():
    registro = {
       "userID": "testIncorrecto6", "email": "mal_formato@qwer.asdfg", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid7():
    registro = {
       "userID": "testIncorrecto7", "email": "@mal_formato.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid8():
    registro = {
       "userID": "testIncorrecto8", "email": "mal_formato#qwer.asdf", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid9():
    registro = {
       "userID": "testIncorrecto9", "email": "", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid10():
    registro = {
       "userID": "testIncorrecto10", "email": "buenas1234@gmail.com", "password": ""
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text

def test_post_register_invalid11():
    registro = {
       "userID": "", "email": "buenasXD@gmail.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "422" in response.text