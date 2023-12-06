from pydantic import BaseModel
from typing import List

class Receta(BaseModel):
    user: str
    nombre: str
    classe: str
    tipo: str
    ingredientes: List[str] = []
    pasos: List[str] = []
    images: str
    time: int
    dificultad: int