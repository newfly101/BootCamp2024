# 서버 구현하기
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, ValidationError
from fastapi.staticfiles import StaticFiles

class Memo(BaseModel):
    id:int
    content:str

memos = []

app = FastAPI()


# memo를 갖고오게 get으로 읽어옴
@app.get("/memos")
def read_memo():
    return memos


# 생성
@app.post("/memos")
async def create_memo(memo: Memo):
    print("Recived Memo : ", memo)
    memos.append(memo)
    return {"message": "메모가 생성되었습니다.", "memo": memo.dict()}

# 수정
@app.put("/memos/{id}")
def update_memo(req_memo: Memo):
    for memo in memos:
        if memo.id == req_memo.id:
            memo.content = req_memo.content
            print("Change Memo : ", memo)
            return {"message": "메모가 수정되었습니다.", "memo": memo.dict()}
    return {"message": "존재하지 않는 메모입니다.", "memo": memo.dict()}

# 삭제
@app.delete("/memos/{memo_id}")
def delete_memo(memo_id):
    print("Deleting Memo : ", memo_id)
    print("MEMOS : ", memos)
    for index, memo in enumerate(memos): # 배열의 index와 값을 동시에 뽑아주는 function
        print("$$memo : ", memo)
        print("$$index : ", index)
        if memo.id == memo_id:
            print("Memo.id : ", memo.id)
            print("Memo.content : ", memo.content)
            print("Memo index : ", index)
            memos.pop(index)
            return {"message": "메모가 삭제되었습니다.", "memo": memo.dict()}
    return {"message": "존재하지 않는 메모입니다.", "memo": memo.dict()}


# 루트 경로에 우리의 static 파일에 있는 html을 호스팅 해준다.
app.mount("/", StaticFiles(directory="static", html=True), name="static")

# 서버 실행 방법 : terminal에서 명령어 입력 --reload 옵션은 코드 수정되면 자동 새로고침
# python -m uvicorn main:app --reload

# 다음과 같이 실행하는 경우 Terminal에서 해당 url 을 클릭해야 함
# python -m uvicorn main:app --host 127.0.0.1 --port 8089  --log-level info
