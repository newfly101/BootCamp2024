// 1주차_신입연수원_DAY4_사수 도움 요청 업무_문제②
// 연도와 달, 날짜까지 표시되는 시계 기능이 추가됐어요. JavaScript를 이용해 구현 부탁드릴게요~!

const toDayViewer = () => {
    setInterval(newDateToday,1000);
}

function newDateToday() {
    const toDay = new Date();

    const year = toDay.getFullYear();
    const month = toDay.getMonth();
    const date = toDay.getDate();
    const hours = toDay.getHours();
    const minutes = toDay.getMinutes();
    const seconds = toDay.getSeconds();
    const checkTime = document.querySelector(".check-timer");
    checkTime.innerHTML = `${year}년 ${month}월 ${date}일
     ${hours}시 ${minutes}분 ${seconds}초`;

}
toDayViewer();

// 1주차_신입연수원_DAY4_사수 도움 요청 업무_문제③
// setTimeout을 이용해 setInterval처럼 1초마다 console.log(’내용은 자유’)를 호출하고 싶은데 어떻게 만들면 좋을까요?

function sendMsg() {
    console.log('내용은 자유');
    // main에서 1초만 호출 하기 때문에 한번 더 재귀로 반복 시켜준다.
    // setInterval 과 같은 동작을 하기 위해서는 재귀형으로 코드 작성해야 한다.
    // 이러한 코드는 가독성이 떨어지기 때문에 지향해야 한다.
    setTimeout(sendMsg, 1000);
}

// 1초 마다 반복 : 1초후에 한번 sendMsg 를 호출하고 종료
// setTimeout(sendMsg, 1000);


// 1주차_신입연수원_DAY4_팀장님 지시 업무_문제①
// 키보드에도 동일하게 정답 표시가 표시되게 구현하고 키보드 클릭으로 입력이 가능하도록 구현해주세요~!

const keydownF = (event) => {
    // console.log(event);
    let word = document.querySelector(".check-keyboard");
    console.log(event.key, event.keyCode);
    if (!(event.keyCode < 65 || event.keyCode > 90)) {
        word.innerText = event.key.toUpperCase()+", "+event.keyCode;
    } else if (event.keyCode === 32) {
        word.innerText = "Space";
    } else {
        word.innerText = event.key;
    }


}

window.addEventListener("keydown", keydownF);