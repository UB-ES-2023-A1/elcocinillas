from fastapi import FastAPI, UploadFile, HTTPException, Form, File
from typing import List
import os
from database import firestore as database
from fastapi.middleware.cors import CORSMiddleware
from models.user import User
from models.receta import Receta
from models.filtros import FiltroRecetas


app = FastAPI()

# Configura CORS para permitir solicitudes desde tu aplicación Vue
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://127.0.0.1:8080"],  # Reemplaza con la URL de tu frontend Vue
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return ""

@app.post("/register/", response_model=str)
def register(user: User):
    return database.signup(user.email, user.password, user.userID)
    
@app.get("/receta/{name}")
def get_receta(name: str):
    return database.get_recepta(name)

@app.get("/user/{username}")
def get_user(username: str):
    return database.get_user(username)

@app.put("/user/{user_id}")
def update_user(user_id: str, updated_user: User):
    return database.update_user(user_id,updated_user)

@app.get("/recetas/")
async def get_recetas(filtro: FiltroRecetas):
    print(filtro)
    return database.get_receptes(filtro)


@app.get("/todasrecetas/")
def get_all_recipes():
    return database.get_all_recipes()

@app.post("/imgUpload/", response_model=str)
def publi_img(nombre: str = Form(...), files: List[UploadFile] = File(...)):

    receta = database.get_recepta(nombre)

    image_urls = []
    for file in files:
        # Lee el archivo en memoria
        image_data = file.file.read()

        # Sube la imagen a Firebase Storage y obtén la URL
        image_url = database.uploadImg(receta, image_data)

        # Agrega la URL de la imagen a la lista de URLs
        image_urls.append(image_url)

    receta['images'] = image_urls
    database.updateImg(receta)
    
    return "Tot bene"

@app.post("/receta", response_model=str)
def publi_receta(receta: Receta):
    try:
        # Intenta crear la receta en la base de datos
        database.create_recepta(receta)
        return "200"
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=500, detail="Error en el servidor leer img: " + str(e))