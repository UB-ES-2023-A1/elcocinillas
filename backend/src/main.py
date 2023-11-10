from fastapi import FastAPI, UploadFile, HTTPException, Form, File
from typing import List
import os
import database
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
    return database.signup(user.email, user.password, user.userID)
    
@app.get("/receta/{name}")
def get_receta(name: str):
    return database.get_recepta(name)

@app.get("/recetas/", response_model=tuple)
def get_recetas(filtro: FiltroRecetas):
    return database.get_receptes(filtro)

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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
