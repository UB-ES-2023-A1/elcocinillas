from pydantic import BaseModel

class User(BaseModel):
    userID: str
    email: str
    password: str