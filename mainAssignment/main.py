# 서버 구현하기
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

class Chat(BaseModel):
    date:str
    content:str

chats = []

app = FastAPI()

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
