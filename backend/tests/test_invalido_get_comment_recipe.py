import requests

API_URL = "http://127.0.0.1:8000"

#TESTS INCORRECTOS:
def test_get_coment_recipe_invalid1(): #test con una receta que no exista
    recipe_name = "RecetaQueNoExisteImposible"
    response = requests.get(f"{API_URL}/comments_by_recipe/{recipe_name}")
    assert "[]" in response.text

