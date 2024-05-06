async function editMemo(event) {
    const id = event.target.dataset.id;
    const editText = prompt("메모 수정 내용 입력하세요.");
    const res = await fetch(`/memos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", // 기본적으로 보내야 하는 header
        },
        body: JSON.stringify({
            id, // id:id
            content: editText,
        }),
    });
    readMemo();    // < button data-id = "2024-05-06T06:56:08.990Z"> 수정 </button>
}


function displayMemos(memos) {
    // data = [{id:"123", content:"inputData"}]
    const ul = document.querySelector("#memo-ul");
    const li = document.createElement("li");
    const editBtn = document.createElement("button");
    li.innerText = `[id:${memos.id}] ${memos.content}`;
    editBtn.innerText = "수정";
    editBtn.addEventListener("click", editMemo);
    editBtn.dataset.id = memos.id; // <button data-id=`${memos.id}` />

    ul.appendChild(li);
    li.appendChild(editBtn);
}

async function readMemo(){
    const res = await fetch("/memos");
    const jsonRes = await res.json();
    
    // 데이터를 받아오면 내부 html 을 초기화 해줌
    const ul = document.querySelector("#memo-ul");
    ul.innerHTML = "";
    // console.log("readMemo: ",jsonRes);
    jsonRes.forEach(displayMemos);
}



async function createMemo(value) {
    // 서버에 메모를 생성 요청
    console.log("inputMemo값 출력 : ", value);
    try {
        const res = await fetch("/memos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // 기본적으로 보내야 하는 header
            },
            body: JSON.stringify({
                    id: new Date(),
                    content: value,
            }),
        });
        // console.log("response : ", res.body);
        const jsonRes = await res.json();
        console.log("jsonRes", jsonRes);
        readMemo();
    } catch (e) {
        console.log("error: ", e.message);
    }

}

function handleSubmit(event) {
    // event를 막는 함수
    event.preventDefault();
    // input의 값을 그대로 가져와서 create 하기
    const memo = document.querySelector("#memo-input");
    createMemo(memo.value);
    memo.value = "";
}

// form에 있는 submit event
// 제출과 동시에 redirect 됨
const form = document.querySelector('#memo-form');
form.addEventListener("submit", handleSubmit);


// 서버에 계속 저장하고 있을 수 있음.
readMemo();