from pydantic import BaseModel
from typing import List

class Receta(BaseModel):
    user: str
    nombre: str
    ingredientes: List[str]
    pasos: List[str]
    time: int
    dificultad: int