import firebase_admin
from firebase_admin import credentials, auth

# Inicializa la aplicación Firebase con tus credenciales
cred = credentials.Certificate('..\\src\\database\\elcocinillas.json')
firebase_admin.initialize_app(cred)

import requests

API_URL = "http://127.0.0.1:8000"

#TESTS CORRECTOS:
def test_get_receta_valid1():
    name = "Prueba"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text

def test_get_receta_valid2():
    name = "En un laboratorio muy especial, ubicado en una colina aislada, un grupo de científicos se dedicaba a realizar experimentos sorprendentes. Su objetivo principal era descubrir nuevos avances en la ciencia y la tecnología, y estaban dispuestos a explorar los límites de la imaginación humana.Un día, el director del laboratorio, el Dr. Alexander Grayson, anunció un proyecto emocionante. Quería crear un dispositivo que permitiera viajar en el tiempo. El equipo de científicos se emocionó con la idea y comenzaron a trabajar incansablemente en el proyecto.Durante meses, se sucedieron experimentos y pruebas en el laboratorio. Se generaban rayos de energía, se creaban campos magnéticos y se manipulaban partículas subatómicas en busca de la clave para abrir una puerta al pasado o al futuro. Cada día, los científicos se acercaban un paso más a su objetivo.Finalmente, un día, después de innumerables desafíos y obstáculos, el laboratorio logró un avance importante. Crearon un pequeño dispositivo que, cuando se activaba, parecía doblar el tejido del espacio y el tiempo. El Dr. Grayson se ofreció como voluntario para ser el primer viajero en el tiempo.El laboratorio estaba lleno de expectación mientras el Dr. Grayson activaba el dispositivo y desaparecía en un destello de luz. Todos los científicos esperaban ansiosos su regreso. Pasaron horas, días y semanas, pero el Dr. Grayson nunca regresó.El equipo de científicos quedó desconcertado y preocupado. Habían logrado crear una máquina del tiempo, pero ¿dónde estaba el Dr. Grayson? La incertidumbre los atormentaba mientras continuaban investigando y buscando respuestas.Este evento marcó un antes y un después en la historia del laboratorio. Los científicos se dieron cuenta de que viajar en el tiempo era un territorio desconocido y peligroso. A medida que seguían investigando, se dieron cuenta de que la máquina del tiempo tenía efectos impredecibles en la realidad, y el destino del Dr. Grayson seguía siendo un misterio sin resolver.El laboratorio continuó sus investigaciones, pero con una mayor cautela. Aprendieron que la ciencia era un territorio inexplorado lleno de desafíos y sorpresas, y que debían abordarlo con respeto y humildad."
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text

def test_get_receta_valid3():
    name = "1234"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text

def test_get_receta_valid4():
    name = "Test Prueba 12345"
    response = requests.get(f"{API_URL}/receta/{name}")
    assert "200" in response.text