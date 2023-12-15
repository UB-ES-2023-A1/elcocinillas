import requests
API_URL = "http://127.0.0.1:8000"


#TEST SIN USER:
def test_post_receta_invalid1(): #intento crear una receta sin añadir usuario
    receta = {
  "user": "",
  "nombre": "Pollo guisado",
  "classe": "Hamburguesa",
  "tipo": "Omnívora",
  "ingredientes": "ejemplos",
  "pasos": "ejemplo",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así

#TEST SIN NOMBRE:
def test_post_receta_invalid2(): #intento crear una receta sin añadir nombre de receta
    receta = {
  "user": "testcorrecto2",
  "nombre": "",
  "classe": "Hamburguesa",
  "tipo": "Omnívora",
  "ingredientes": "ejemplos",
  "pasos": "ejemplo",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta) 
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así

#TEST SIN CLASSE:
def test_post_receta_invalid3(): #intento crear una receta sin añadir clase
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "",
  "tipo": "Omnívora",
  "ingredientes": "ejemplos",
  "pasos": "ejemplo",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así

#TEST SIN TIPO:
def test_post_receta_invalid4(): #intento crear una receta sin añadir tipo de comida
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "Hamburguesa",
  "tipo": "",
  "ingredientes": "ejemplos",
  "pasos": "ejemplo",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así

#TEST SIN INGREDIENTES:
def test_post_receta_invalid5(): #intento crear una receta sin añadir ingredientes
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "Hamburguesa",
  "tipo": "Omnívora",
  "ingredientes": "",
  "pasos": "ejemplo",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así

#TEST SIN PASOS:
def test_post_receta_invalid6(): #intento crear una receta sin añadir pasos de receta
    receta = {
  "user": "testcorrecto2",
  "nombre": "Pollo guisado",
  "classe": "Hamburguesa",
  "tipo": "ejemplo",
  "ingredientes": "ejemplos",
  "pasos": "",
  "images": "ejemplo",
  "time": 1,
  "dificultad": 1
}
    response = requests.post(f"{API_URL}/receta", json=receta)
    assert '{"detail"' in response.text #es lo mismo que un 422, es el error que sale, lo gestionamos así
