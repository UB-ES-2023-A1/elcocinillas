from fastapi import FastAPI, Query
import database
from models.user import User
from models.receta import Receta
from models.filtros import FiltroRecetas

app = FastAPI()

@app.get("/")
def index():
    return "hola"

@app.post("/register/", response_model=str)
def register(user: User):
    return database.signup(user.email, user.password, user.userID)

@app.get("/login/{user}", response_model=User)
def login(usuari: User):
    database.login(usuari.email, usuari.password)
    

@app.get("/receta/{name}")
def get_receta(name: str):
    print(database.get_recepta(name))

@app.get("/recetas/", response_model=tuple)
def get_recetas(filtro: FiltroRecetas):
    return database.get_receptes(filtro)

@app.post("/receta", response_model=str)
def publi_receta(receta: Receta):
    return database.create_recepta(receta)