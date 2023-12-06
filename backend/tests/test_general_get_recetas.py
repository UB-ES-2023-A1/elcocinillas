import requests

API_URL = "http://127.0.0.1:8000"

#TEST CORRECTOS:
"""
user: str = Query(None),
classe: list = Query([]),
tipo: str = Query(None),
ingredientes: list = Query([]),
time: int =  Query(None),
dificultad: int = Query(None) 
"""

def test_get_recetas():
	"""
	Parametros receta
	---------------------
	user: str
    nombre: str
    classe: str
    tipo: str
    ingredientes: str
    pasos: str
    images: str
    time: int
    dificultad: int
	"""
	receta = {
		"user": "testcorrecto1",
		"nombre": "pollo al Asier",
		"classe": "Hamburguesa",
		"tipo": "Omnívora",
		"ingredientes": ["tomate", "pollo", "Asier"],
		"pasos": "cocinar a Asier y le añades un par de cosas más, lo que te apetezca realmente, está bueno igualmente",
		"images": "",
		"time": 2,
		"dificultad": 2

	}
	response = requests.put(f"{API_URL}/receta/", json=receta)
	print(response)
	request_body = {
		"user": "testcorrecto1",
		"classe": "Hamburguesa",
		"tipo": "Omnívora",
		"ingredientes": ["tomate", "pollo", "Asier"],
		"time": 2,
		"dificultad": 2
	}
	response = requests.get(f"{API_URL}/recetas/", json=request_body)
	print(response)
	assert response.text == receta
    #response = requests.(f"{API_URL}/eliminarReceta/"+receta["nombre"], json=request_body)	

#TEST INCORRECTOS
def test_get_recetas2():
	request_body = {
		"user": "testcorrecto1",
		"classe": ["Hamburguesa"],
		"tipo": "Omnívora",
		"ingredientes": ["tomate", "pollo", "Asier"],
		"time": 2,
		"dificultad": 2
	}
	response = requests.get(f"{API_URL}/recetas/", params=request_body)
	print("\nRequest message:")
	print(response.text)

"""	
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
"""