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
    // const displayGameover = () => {
    //     const div = document.createElement("div");
    //     div.innerText = "게임이 종료되었습니다.";
    //     div.style = "display:flex; justify-content:center; align-items:center;";
    //     document.body.appendChild(div);
    // }
    //
    // const gameover = () => {
    //     window.removeEventListener("keydown",handleKeyDown);
    // }

    let totalResult = new Array(4);

    const handleEnterKey = (event) => {
        // 정답 확인
        console.log(event);
        let result = '';
        for (let i = 0 ; i < 5; i++) {
            let inputBlock = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
            let inputText = inputBlock.innerText;
            let wordBlock = document.querySelector(`.word-key[data-key='${inputText}']`);
            console.log(wordBlock.innerText);

            // 오류 나는 부분 : 하단 wordBlock 의 색상이 계속 변경됨 이것을 정답 시 고정시키는 게 필요함
            console.log("wordBlock => ",wordBlock);
            if (inputText === wordleResult[i]) {
                // 정답 완벽 일치 시 color 색상 설정
                inputBlock.style.background = "#6aaa64";
                inputBlock.style.border = "4px solid #6aaa64";
                wordBlock.style.background = "#6aaa64";
                wordBlock.style.borderColor = "#6aaa64";
                totalResult[i] = inputText;
            } else if (wordleResult.includes(inputText)) {
                // 정답 안에 단어 있을 시 color 색상 설정
                if (!totalResult.includes(inputText)) {
                    inputBlock.style.background = "#c9b458";
                    inputBlock.style.border = "4px solid #c9b458";
                    wordBlock.style.background = "#c9b458";
                    wordBlock.style.borderColor = "#c9b458";
                } else {
                    inputBlock.style.background = "#c9b458";
                    inputBlock.style.border = "4px solid #c9b458";
                }
            } else {
                // 정답 안에 단어 없을 시 색상 설정
                inputBlock.style.background = "#787c7e";
                inputBlock.style.border = "4px solid #787c7e";
                wordBlock.style.background = "#787c7e";
                wordBlock.style.borderColor = "#787c7e";
            }
            wordBlock.style.color = "white";
            inputBlock.style.color = "white";
        }
        // console.log(totalResult);
    }

    const handleKeyDown = (event) => {
        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);

        if (keyCode >= 65 && keyCode <= 90) {
            if (index <= 4) {
                thisBlock.innerText = key;
                index++;
                thisBlock.style.border = '4px solid black';
            }
        } else if (keyCode === 13 && index === 5) {
            // key = Enter
            handleEnterKey(event);
            attempts++;
            index = 0;
        } else if (keyCode === 8) {
            // key = Backspace
            if (index > 0) {
                const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index-1}']`);
                thisBlock.innerText = '';
                thisBlock.style.border = '4px solid rgb(211,214,218)';
                index--;
            }

        }
    }
    window.addEventListener("keydown",handleKeyDown);
}

// 앱 시작
appStart();



