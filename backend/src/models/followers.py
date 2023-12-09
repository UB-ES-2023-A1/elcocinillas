from pydantic import BaseModel
from typing import List

class Follower(BaseModel):
    user: str
    following: List[str] = []