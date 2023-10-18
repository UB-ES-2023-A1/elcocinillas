from pydantic import BaseModel
from typing import List

class FiltroRecetas(BaseModel):
    user: str = None
    classe: str = None
    tipo: str = None
    ingredientes: List[str] = []
    time: int = None
    dificultad: int = None