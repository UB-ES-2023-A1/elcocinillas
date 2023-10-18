import requests

# Definir la URL de tu servidor local
url = 'http://127.0.0.1:8000/receta'

# Definir los datos de la receta en formato JSON
data = {
    "user": "12345",
    "nombre": "Salsa de boletus",
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

# Crear el cuerpo de la solicitud con los datos de la receta
files = []
for image_path in image_paths:
    with open(image_path, 'rb') as image_file:
        files.append(('files', (image_path, image_file, 'image/jpeg')))

# Realizar la solicitud POST con las imágenes adjuntas
response = requests.post(url, data=data, files=files)

# Imprimir la respuesta del servidor
print(f'Respuesta del servidor: {response.status_code}')
print(f'Cuerpo de la respuesta: {response.text}')