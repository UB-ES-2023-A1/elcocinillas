import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_put_seguir_valid1(): #un usuario correcto intenta seguir a otro correcto también
    user = "Asier"
    following = "kobos"
    response = requests.put(f"{API_URL}/seguir/{user}/{following}")
    assert "200" in response.text
