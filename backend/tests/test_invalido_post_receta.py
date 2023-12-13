import requests
API_URL = "http://127.0.0.1:8000"


#TEST SIN USER:
def test_post_receta_invalid1():
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
    assert "422" in response.text

#TEST SIN NOMBRE:
def test_post_receta_invalid2():
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
    assert "422" in response.text

#TEST SIN CLASSE:
def test_post_receta_invalid3():
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
    assert "422" in response.text

#TEST SIN TIPO:
def test_post_receta_invalid4():
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
    assert "422" in response.text

#TEST SIN INGREDIENTES:
def test_post_receta_invalid5():
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
    assert "422" in response.text

#TEST SIN PASOS:
def test_post_receta_invalid6():
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
    assert "422" in response.text
