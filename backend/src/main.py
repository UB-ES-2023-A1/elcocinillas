from fastapi import FastAPI
from backend.src import database
from backend.src.models.user import User
from backend.src.models.receta import Receta
from backend.src.models.filtros import FiltroRecetas

app = FastAPI()

@app.get("/")
def index():
    return ""

@app.post("/register/", response_model=str)
def register(user: User):
    return database.signup(user.email, user.password, user.userID)
    
@app.get("/receta/{name}")
def get_receta(name: str):
    print(database.get_recepta(name))

@app.get("/recetas/", response_model=tuple)
def get_recetas(filtro: FiltroRecetas):
    return database.get_receptes(filtro)

@app.post("/receta", response_model=str)
def publi_receta(receta: Receta):
    return database.create_recepta(receta)