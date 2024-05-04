

function createMemo(event) {
    // event를 막는 함수
    event.preventDefault();
    console.log("동작 check");
}

// form에 있는 submit event
// 제출과 동시에 redirect 됨
const form = document.querySelector('#memo-form');
form.addEventListener("submit", createMemo);