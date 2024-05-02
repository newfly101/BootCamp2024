// 1주차_신입연수원_DAY4_사수 도움 요청 업무_문제②
// 연도와 달, 날짜까지 표시되는 시계 기능이 추가됐어요. JavaScript를 이용해 구현 부탁드릴게요~!

const toDayViewer = (event) => {
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




// const keydownF = (event) => {
//     console.log(event);
//     let word = document.querySelector(".check-keyboard");
//     console.log(event.key, event.keyCode);
//     word.innerText = event.key.toUpperCase()+", "+event.keyCode;
// }
//
// window.addEventListener("keydown", keydownF);