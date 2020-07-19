from fastapi import FastAPI, Depends
from config import Config
from sqlalchemy.orm import Session
from database import get_db

app = FastAPI(docs_url=Config.DOC_URL, redoc_url=Config.REDOC_URL)


@app.get("/python/")
def read_root():
    return {"app": "fastapi-starter-kit"}

