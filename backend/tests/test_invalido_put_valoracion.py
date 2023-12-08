import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_valorar_invalid1():
   receta = "recetaQueNoExiste"
   val = 2

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid2():
   receta = "Ensalada Cesar"
   val = 5555

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid3():
   receta = "Ensalada Cesar"
   val = -2888

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "422" in response.text

def test_put_valorar_invalid4():
   receta = "Ensalada Cesar"
   val = 3.5

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "value is not a valid integer" in response.text