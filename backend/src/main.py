from fastapi import FastAPI
from backend.src import database
from backend.src.models.user import User
from backend.src.models.receta import Receta

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
    

@app.get("/receta/{name}", response_model=Receta)
def get_receta(name: str):
    database.get_receptes()

@app.post("/receta", response_model=str)
def publi_receta(receta: Receta):
    database.create_recepta(receta)