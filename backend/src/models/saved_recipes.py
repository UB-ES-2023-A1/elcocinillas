from pydantic import BaseModel
from typing import List

class SavedRecipe(BaseModel):
    user: str
    recipes: List[str] = []