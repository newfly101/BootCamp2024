# 서버 구현하기
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseMode1

app = FastAPI()

app.mount("/", StaticFiles(directory="static", html=True), name="static")