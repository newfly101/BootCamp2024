# 서버 구현하기
from fastapi import FastAPI, UploadFile, Form
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from typing import Annotated
# from fastapi.templating import Jinja2Templates

class Chat(BaseModel):
    id:str
    content:str

# class Item(BaseModel):
#     image:UploadFile
#     title:Annotated[str,Form()]
#     price:Annotated[int,Form()]
#     description:Annotated[str,Form()]
#     place:Annotated[str,Form()]



chats = []

app = FastAPI()

# url 의 이동을 만들기 위해서 실행해야 하는 명령어
# pip install jinja2


# @app.post("/items")
# def create_item(item: Item):
#     print(item)
#     return '200'

@app.post("/items")
def create_item(image:UploadFile,
                title:Annotated[str,Form()],
                price:Annotated[int,Form()],
                description:Annotated[str,Form()],
                place:Annotated[str,Form()]):
    print(image,title,price,description,place)
    return '200'

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
