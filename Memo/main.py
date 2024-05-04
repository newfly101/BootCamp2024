# 서버 구현하기
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
# from pydantic import BaseMode1

app = FastAPI()

# 루트 경로에 우리의 static 파일에 있는 html을 호스팅 해준다.
app.mount("/", StaticFiles(directory="static", html=True), name="static")


# 서버 실행 방법 : terminal에서 명령어 입력
# python -m uvicorn main:app --reload

# *** 페이지를 새로고침 하려면 shift+F5 를 눌러서 백엔드 서버도 새로고침 하기

# 서버에서 아무것도 받을 준비가 되지 않았기 때문에 발생하는 405 error