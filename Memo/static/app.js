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
        }); // GET 요청
        console.log("response : ", res.body);
        const jsonRes = await res.json();
        console.log("jsonRes", jsonRes);
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