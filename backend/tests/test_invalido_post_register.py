

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_post_register_invalid1(): #intento crear un registro usando un correo que ya ha sido creado antes
    registro = {
       "userID": "testIncorrecto1", "email": "buenasREPE@gmail.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid2(): #mal formato de correo
    registro = {
       "userID": "testIncorrecto2", "email": "mal_formato", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid3():#mal formato de correo 2
    registro = {
       "userID": "testIncorrecto3", "email": "mal_formato@", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text
def test_post_register_invalid4(): #mal formato de correo 3
    registro = {
       "userID": "testIncorrecto4", "email": "mal_formato@qwer", "password" : "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid5(): #mal formato de correo 4
    registro = {
       "userID": "testIncorrecto5", "email": "mal_formato@qwer.a", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid6(): #mal formato de correo 5
    registro = {
       "userID": "testIncorrecto6", "email": "mal_formato@qwer.aswfg", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid7(): #mal formato de correo 6
    registro = {
       "userID": "testIncorrecto7", "email": "@mal_formato.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid8(): #mal formato de correo 7
    registro = {
       "userID": "testIncorrecto8", "email": "mal_formato#qwer.asdf", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid9(): #no pongo correo directamente
    registro = {
       "userID": "testIncorrecto9", "email": "", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid10(): #sin contraseña
    registro = {
       "userID": "testIncorrecto10", "email": "buenas1234@gmail.com", "password": ""
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text

def test_post_register_invalid11(): #test sin sin userID
    registro = {
       "userID": "", "email": "buenasXD@gmail.com", "password": "123456"
    }
    response = requests.post(f"{API_URL}/register/", json=registro)
    assert "200" in response.text