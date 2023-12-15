import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_put_valorar_valid1():
   receta = "Crepes"
   val = 3

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "200" in response.text

"""" DE MOMENTO NO MAS PORQUE NO SE HAN ACTUALIZADO LOS PARAMETROS DE LAS RECETAS
def test_put_valorar_valid2():
   receta = "Pato Pekin"
   val = 0

   response = requests.put(f"{API_URL}/valorar/{receta}/{val}")
   assert "200" in response.text
"""

