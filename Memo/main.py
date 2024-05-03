# 서버 구현하기
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseMode1

app = FastAPI()

# 루트 경로에 우리의 static 파일에 있는 html을 호스팅 해준다.
app.mount("/", StaticFiles(directory="static", html=True), name="static")