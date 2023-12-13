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
    valoracion_media: int = 0
    num_valoraciones: int = 0
    carbs: int = 0
    fat: int = 0
    protein: int = 0