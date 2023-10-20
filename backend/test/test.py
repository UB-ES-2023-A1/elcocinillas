import requests
import json

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

# Abre y mantiene abiertos los archivos de imagen
file_handles = []
files = {'files': open('imgTest\\boletus.jpg', 'rb')}
"""for image_path in image_paths:
    file_handle = open(image_path, 'rb')
    file_handles.append(file_handle)
    files.append(('images', (image_path, file_handle, 'image/jpeg')))"""


# Realizar la solicitud POST con las imágenes adjuntas
response = requests.post(
    url, 
    json=data, 
    files=files)

# Imprimir la respuesta del servidor
print(f'Respuesta del servidor: {response.status_code}')
print(f'Cuerpo de la respuesta: {response.text}')

# Cerrar los archivos después de completar la solicitud
for file_handle in file_handles:
    file_handle.close()




