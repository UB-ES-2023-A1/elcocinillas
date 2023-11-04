import requests

# Definir la URL de tu servidor local
url = 'http://127.0.0.1:8000/receta'
urlImg = 'http://127.0.0.1:8000/imgUpload/'

# Definir los datos de la receta en formato JSON
data = {
    "user": "Guillem",
    "nombre": "Salsa de boletus y ceps1",
    "classe": "vegetariana",
    "tipo": "italiana",
    "ingredientes": ["boletus", "nata liquida", "cebolla"],
    "pasos": ["cortar boletus y cebolla", "añadir nata y dejar reducir"],
    "images": [],
    "time": 30,
    "dificultad": 2
}
# Cargar las imágenes desde archivos locales
image_paths = ["imgTest\\boletus.jpg"]

response1 = requests.post(url, json=data)

# Imprimir la respuesta del servidor
print(f'Respuesta del servidor: {response1.status_code}')
print(f'Cuerpo de la respuesta: {response1.text}')



