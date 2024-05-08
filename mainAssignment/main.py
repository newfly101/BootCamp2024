# 서버 구현하기
from fastapi import FastAPI, UploadFile, Form, Response
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3

# DataBase에 연결하는 구문
connect = sqlite3.connect("db.db", check_same_thread=False)
cur = connect.cursor()


class Chat(BaseModel):
    id:str
    content:str

chats = []

# main.py를 실행할 때 DB에 TABLE이 없는 경우 생성해 주는 코드
# IF NOT EXISTS 조건문을 집어넣음
cur.execute(f"""
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                image BLOB,
                price INTEGER NOT NULL,
                description TEXT,
                place TEXT NOT NULL,
                createdTime INTEGER NOT NULL
            );
            """)





app = FastAPI()

@app.post("/items")
async def create_item(image:UploadFile,
                title:Annotated[str,Form()],
                price:Annotated[int,Form()],
                description:Annotated[str,Form()],
                place:Annotated[str,Form()],
                createdTime:Annotated[str,Form()]):
    print(image,title,price,description,place)

    # 이미지를 읽는 시간을 가짐
    image_bytes = await image.read()
    # db에 query문을 python에서 작성하는 방법
    cur.execute(f"""INSERT INTO Items (title, image, price, description, place, createdTime)
                    VALUES ('{title}', '{image_bytes.hex()}', {price}, '{description}', '{place}','{createdTime}')
                """)
    connect.commit()
    return '200'

@app.get("/items")
async def get_items():
    # column 명도 같이 가져옴
    connect.row_factory = sqlite3.Row
    cur = connect.cursor()
    rows = cur.execute(f"""
                        SELECT * FROM Items;
                       """).fetchall()
    return JSONResponse(jsonable_encoder(dict(row) for row in rows))
    # [1, 'title', 'price', 'image' ... ] 으로 나오는데 이것을
    # { id:1, title:'title', ... } 의 형식으로 갖고 오게끔 한다.

@app.get("/images/{item_id}")
async def get_image(item_id):
    cur = connect.cursor()
    # db에 저장 할 때 image_bytes.hex() 로 저장 하기 때문에 16진법으로 받게 된다.
    image_bytes = cur.execute(f"""
                            SELECT image FROM Items WHERE id={item_id};
    """).fetchone()[0]

    return Response(content=bytes.fromhex(image_bytes), media_type="image/*")



@app.post('/signup')
def signup(id:Annotated[str,Form()],
           password:Annotated[str,Form()]):
    print(id, password);
    return '200'



# chat 갖고오기
@app.get("/chat")
async def read_chats():
    return chats


# chat 서버 통신
@app.post("/chat")
async def create_chat(chat: Chat):
    chats.append(chat)


# 루트 경로에 우리의 static 파일에 있는 html을 호스팅 해준다.
app.mount("/", StaticFiles(directory="static", html=True), name="static")

# python -m uvicorn main:app --host 127.0.0.1 --port 8089  --log-level info
