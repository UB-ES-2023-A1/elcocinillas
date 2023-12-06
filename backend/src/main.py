from fastapi import FastAPI, UploadFile, HTTPException, Form, File, Query
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
    allow_origins=["*"],  # Reemplaza con la URL de tu frontend Vue
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return ""

@app.post("/register/", response_model=str)
def register(user: User):
    try:
        database.signup(user.email, user.password, user.userID)
        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor registro: " + str(e))
    
@app.get("/receta/{name}")
def get_receta(name: str):
    try:
        return database.get_recepta(name)
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor obtener receta: " + str(e))

@app.get("/recetas/{cadena}")
def busca_recetas(cadena: str):
    try:
        return database.busca_recetas(cadena)
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor buscar recetas: " + str(e))

@app.get("/user/{username}")
def get_user(username: str):
    try:
        return database.get_user(username)
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor obtener usuario: " + str(e))

@app.put("/user/{user_id}")
def update_user(user_id: str, updated_user: User):
    try:
        database.update_user(user_id,updated_user)
        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor actualizar usuario: " + str(e))

@app.get("/recetas/",response_model=tuple)
def get_recetas(
    user: str = Query(None),
    classe: list = Query([]),
    tipo: str = Query(None),
    ingredientes: list = Query([]),
    time: int =  Query(None),
    dificultad: int = Query(None) ):

    try:
        filtro = {"user": user ,"classe": classe,"tipo": tipo,"ingredientes": ingredientes, "time": time, "dificultad": dificultad}
        return database.get_receptes(filtro)
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor leer recetas con filtros: " + str(e))



@app.get("/todasrecetas/")
def get_all_recipes():
    try:
     return database.get_all_recipes()
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor leer todas recetas: " + str(e))

@app.post("/imgUpload/", response_model=str)
def publi_img(nombre: str = Form(...), file: UploadFile = File(...)):
    try:
        # Lee el archivo en memoria
        image_data = file.file.read()

        # Sube la imagen a Firebase Storage y obtén la URL
        image_url = database.uploadImg(nombre, image_data)

        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor subir img: " + str(e))


@app.post("/receta", response_model=str)
def publi_receta(receta: Receta):
    try:
        # Intenta crear la receta en la base de datos
        database.create_recepta(receta)
        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor leer img: " + str(e))

@app.get("/imgReceta/{nombre_receta}")
def get_image_url(nombre_receta: str):
    try:
        return database.getRecipeImages(nombre_receta)
    except Exception as e:
        return HTTPException(status_code=422, detail="Error en el servidor leer img: " + str(e))

@app.put("/seguir/{user}/{following}")
def follow_user(user:str,following:str):
    try:
        database.follow_user(user,following)
        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor al seguir usuario: " + str(e))

@app.put("/dejar_seguir/{user}/{unfollowing}")
def unfollow_user(user: str, unfollowing: str):
    try:
        database.unfollow_user(user,unfollowing)
        return 200
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor al dejar de seguir usuario: " + str(e))

@app.get("/siguiendo/{user}")
def get_following(user:str):
    try:
        return database.get_following(user)
    except Exception as e:
        # Captura cualquier excepción y maneja el error
        return HTTPException(status_code=422, detail="Error en el servidor al buscar lista de siguiendo: " + str(e))



@app.delete("/eliminar_receta/{nombre_receta}")
def eliminar_receta(nombre_receta: str):
   try:
        database.delete_recipe(nombre_receta)
        return 200
   except Exception as e:
       # Captura cualquier excepción y maneja el error
       return HTTPException(status_code=422, detail="Error en el eliminado de recetas: " + str(e))
