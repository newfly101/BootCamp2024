/** Requirements
    1) 5글자 단어
    2) 6번의 시도 가능
    3) 존재하면 노란색, 위치도 맞으면 초록색
    4) 게임 종료 판단
    (추가) 상단에 게임 시간 표시하기
    (선택) 키보드에도 동일하게 표시
    (선택) 키보드 클릭으로도 입력
 **/

function appStart() {
    const handleKeyDown = (event) => {
        const key = event.key;
        const keyCode = event.keyCode;
        if (keyCode >= 65 && keyCode <= 90) {
            const thisBlock = document.querySelector(".board-block[data-index='00']");
            thisBlock.innerText = String.fromCharCode(keyCode);
            console.log(event);
        } else if (keyCode === 13 || keyCode === 8) {
            // key = Enter / Backspace
            const thisBlock = document.querySelector(".board-block[data-index='00']");
            thisBlock.innerText = key;
        }
    }
    window.addEventListener("keydown",handleKeyDown);
}

// 앱 시작
appStart();



