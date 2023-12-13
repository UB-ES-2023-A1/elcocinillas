import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_get_coment_recipe_valid1():
    recipe_name = "Crepes"
    response = requests.get(f"{API_URL}/comments_by_recipe/{recipe_name}")
    assert "Muy buena receta" in response.text
