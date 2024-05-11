
function displayMemos(memos) {
    // data = [{id:"123", content:"inputData"}]
    const ul = document.querySelector("#chat-ul");
    const li = document.createElement("li");
    li.innerText = `[id:${memos.id}] ${memos.content}`;
    ul.appendChild(li);
}

async function readMsg() {
    const res = await fetch("/chat");
    const jsonRes = await res.json();

    const ul = document.querySelector("#chat-ul");
    ul.innerHTML = "";
    jsonRes.forEach(displayMemos);

}

async function chat(msg) {
    const res = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: new Date(),
            content: msg,
        }),
    });
    const jsonRes = await res.json();
    console.log(jsonRes);
    readMsg();
}

function handleSubmit(event) {
    // event 동작 막는 함수
    event.preventDefault();

    // input값 가져와서 서버로 보내는 함수 작성
    const sendMessage = document.querySelector("#send-message");
    chat(sendMessage.value);
    sendMessage.value = "";
}

const form = document.querySelector("#chat-form");
form.addEventListener("submit", handleSubmit);

readMsg();

