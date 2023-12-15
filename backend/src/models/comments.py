from pydantic import BaseModel

class Comment(BaseModel):
    Receta: str
    Texto: str
    User: str
