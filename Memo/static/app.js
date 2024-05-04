async function createMemo(memo) {
    // 서버에 메모를 생성 요청
    const res = await fetch("/memos", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json", // 기본적으로 보내야 하는 header
        },
        body: JSON.stringify({
            id: new Date(),
            content: memo,
        }),
    }); // GET 요청
    const jsonRes = await res.json();
    console.log(jsonRes);

}

function handleSubmit(event) {
    // event를 막는 함수
    event.preventDefault();
    // input의 값을 그대로 가져와서 create 하기
    const memo = document.querySelector("#memo-input");
    console.log("inputMemo값 출력 : ",memo.value);
    createMemo(memo.value);
    memo.value = '';
}

// form에 있는 submit event
// 제출과 동시에 redirect 됨
const form = document.querySelector('#memo-form');
form.addEventListener("submit", handleSubmit);