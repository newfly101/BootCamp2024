# 서버 구현하기
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

class Chat(BaseModel):
    date:str
    content:str

chats = []

app = FastAPI()

# url 의 이동을 만들기 위해서 실행해야 하는 명령어
# pip install jinja2

# templates 폴더 만들고 이제 이동할 경로 만들어주기 chat.html 옮겨주기
templates = Jinja2Templates(directory="templates")

# chat 갖고오기
@app.get("/chat")
async def read_chats():
    return chats

# chat 서버 통신
@app.post("/chat")
async def create_chat(chat: Chat):
    chats.append(chat)
    return {"message": "Chat created", "chats": chats}


# 루트 경로에 우리의 static 파일에 있는 html을 호스팅 해준다.
app.mount("/", StaticFiles(directory="static", html=True), name="static")

# python -m uvicorn main:app --host 127.0.0.1 --port 8089  --log-level info
