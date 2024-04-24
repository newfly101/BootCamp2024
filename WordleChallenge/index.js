/** Requirements
    1) 5글자 단어
    2) 6번의 시도 가능
    3) 존재하면 노란색, 위치도 맞으면 초록색
    4) 게임 종료 판단
    (추가) 상단에 게임 시간 표시하기
    (선택) 키보드에도 동일하게 표시
    (선택) 키보드 클릭으로도 입력
 **/

let index = 0;
let attempts = 0;

const wordleResult = 'MONEY';

function appStart() {
    const handleEnterKey = (event) => {
        // 정답 확인
        console.log(event);
        let result = '';
        for (let i = 0 ; i < 5; i++) {
            let strings = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
            // console.log(strings.innerText);
            result += strings.innerText.toString();
        }
        console.log(result);
    }

    const handleKeyDown = (event) => {
        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);

        if (keyCode >= 65 && keyCode <= 90) {
            if (index <= 4) {
                thisBlock.innerText = key;
                index++;
            }
        } else if (keyCode === 13) {
            // key = Enter
            // init 해주기 값
            handleEnterKey(event);
            attempts++;
            index = 0;
        } else if (keyCode === 8) {
            // key = Backspace
            if (index > 0) {
                const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index-1}']`);
                thisBlock.innerText = '';
                index--;
            }

        }
    }
    window.addEventListener("keydown",handleKeyDown);
}

// 앱 시작
appStart();



