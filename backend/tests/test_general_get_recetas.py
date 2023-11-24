import firebase_admin
from firebase_admin import credentials, auth
import os

# Inicializa la aplicación Firebase con tus credenciales
current_directory = os.path.dirname(__file__)
file_path = os.path.join(current_directory, 'elcocinillas.json')
firebase_admin.initialize_app(file_path)

import requests

API_URL = "http://127.0.0.1:8000"

#TEST CORRECTOS:
def test_get_recetas():
	request_body = {
		"user": "testcorrecto2",
		"classe": "prueba",
		"tipo": "prueba",
		"ingredientes": ["prueba"],
		"time": 1,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
	

#TEST INCORRECTOS
def test_get_recetas2():
	request_body = {
		"user": "",
		"classe": "prueba",
		"tipo": "prueba",
		"ingredientes": ["prueba"],
		"time": 1,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
	
def test_get_recetas3():
	request_body = {
		"user": "testcorrecto2",
		"classe": "",
		"tipo": "prueba",
		"ingredientes": ["prueba"],
		"time": 1,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
      
def test_get_recetas4():
	request_body = {
		"user": "testcorrecto2",
		"classe": "prueba",
		"tipo": "",
		"ingredientes": ["prueba"],
		"time": 1,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
	
def test_get_recetas5():
	request_body = {
		"user": "testcorrecto2",
		"classe": "prueba",
		"tipo": "prueba",
		"ingredientes": [""],
		"time": 1,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
	
def test_get_recetas6():
	request_body = {
		"user": "testcorrecto2",
		"classe": "prueba",
		"tipo": "prueba",
		"ingredientes": ["prueba"],
		"time": 0,
		"dificultad": 1
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)
	
def test_get_recetas7():
	request_body = {
		"user": "testcorrecto2",
		"classe": "prueba",
		"tipo": "prueba",
		"ingredientes": ["prueba"],
		"time": 1,
		"dificultad": 0
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print("\nRequest message:")
	print(response.text)