

import requests

API_URL = "http://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io"

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