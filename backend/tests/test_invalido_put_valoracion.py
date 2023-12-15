import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_valorar_invalid1(): #test intentando valorar receta que no existe
   receta = "recetaQueNoExiste"
   val = 2

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid2(): #test intentando valorar con numero positivo excediendo limite
   receta = "Ensalada Cesar"
   val = 5555

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid3(): #test intentando valorar con numero negativo excediendo limite inferior
   receta = "Ensalada Cesar"
   val = -2888

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid4(): #test intentando valorar con un decimal (es un integer, deberia de fallar)
   receta = "Ensalada Cesar"
   val = 3.5

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" not in response.text