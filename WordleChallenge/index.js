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

    let totalResult = new Array(4);

    // 클릭 시 키 값 가져오는 구문
    const handleOnClick = (event) => {
        // console.log(event.target);
        // console.log(event.target.getAttribute('data-key'));
        let clickData = event.target.getAttribute('data-key');
        const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);

        if (clickData !== null) {
            if (clickData === 'Enter') {
                // 글자 수가 5글자가 아닌 경우에 입력하는 것을 방지함
                if (index === 5) {
                    handleEnterKey(event);
                    attempts++;
                    index = 0;
                }
            } else if (clickData === 'Backspace') {
                // 입력 글자가 잇는 경우에만 지우도록 함
                if (index > 0) {
                    const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index-1}']`);
                    thisBlock.innerText = '';
                    thisBlock.style.border = '4px solid rgb(211,214,218)';
                    index--;
                }
            } else {
                // word 다섯 글자 이하인 경우에만 알파벳 입력
                if (index <= 4) {
                    // console.log(clickData);
                    thisBlock.innerText = clickData;
                    index++;
                    thisBlock.style.border = '4px solid black';
                }
            }
        }

    }

    const displayGameOver = (correct) => {
        const div = document.createElement("div");
        if (correct !== 5) {
            div.innerText = "게임이 종료되었습니다. \n 정답: "+wordleResult;
            div.style = "display:flex; justify-content:center; align-items:center;" +
                "position:absolute; top:28vh; left:35vw; background-color:rgb(211,114,218);" +
                " height:100px; padding: 10px 20px 10px 20px;";
        } else {
            div.innerText = "정답입니다!";
            div.style = "display:flex; justify-content:center; align-items:center;" +
                "position:absolute; top:28vh; left:42vw; background-color:rgb(211,114,218);" +
                " height:100px; padding: 10px 20px 10px 20px;";
        }

        document.body.appendChild(div);
    }

    const gameOver = () => {
        // 추가로 입력하는 것을 제한함
        let correct = 0; // 정답 개수
        for (let i = 0 ; i < wordleResult.length; i++) {
            if(wordleResult[i] === totalResult[i]) correct++;
        }
        // 총 시도 횟수가 6회이거나, 정답이 5개인 경우 입력을 제한합니다.
        if (correct === 5 || attempts === 5) {
            window.removeEventListener("keydown",handleKeyDown);
            displayGameOver(correct);
        }

    }


    const handleEnterKey = () => {
        // 정답 확인
        for (let i = 0 ; i < 5; i++) {
            let inputBlock = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
            let inputText = inputBlock.innerText;
            let wordBlock = document.querySelector(`.word-key[data-key='${inputText}']`);

            // 오류 나는 부분 : 하단 wordBlock 의 색상이 계속 변경됨 이것을 정답 시 고정시키는 게 필요함
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
        gameOver();

        let count = 2;
        for (let i = 0; i < 5; i++) {
            let inputBlock = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
            inputBlock.style.animation = `${count}s mainBoard`;
            inputBlock.style.transition = 'transform 0.1s';
            count+=1;
            console.log(count);
        }
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
    // button으로 국한 하면 처음에 잇는 값 하나만 받아오고, 나머지는 동작하지 않기 때문에 window로 받는다.
    window.addEventListener("click",handleOnClick);
}

// 앱 시작
appStart();



