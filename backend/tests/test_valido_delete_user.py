import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:

#PRIMERO CREO UN USUARIO PARA LUEGO TRABAJAR CON EL
def test_crearUsuarioParaEliminarDespues():
   registro = {
       "userID": "usuarioQueSeraEliminado", "email": "eliminado@hotmail.com", "password": "123456"
    }
   response = requests.post(f"{API_URL}/register/", json=registro)
   assert "200" in response.text


#AHORA ELIMINAMOS EL USUARIO RECIEN CREADO
def test_delete_user_invalid1(): #eliminamos el usuario que acabamos de crear 
    nombre_usuario = "usuarioQueSeraEliminado"
    response = requests.delete(f"{API_URL}/eliminar_cuenta/{nombre_usuario}")
    assert "200" in response.text
