function sayHello() {
    console.log("안녕하세요");
}

// 1초마다 sayHello() function을 호출함
// setInterval(sayHello, 1000);

// 1초 이후에 sayHello()를 한번 호출함
setTimeout(sayHello, 1000);



let thisTime = new Date().getDate();
let thisTimeM = new Date().getMinutes();
let thisTimeS = new Date().getSeconds();

function setTime() {
    const time = new Date();
    const timeMin = time.getMinutes().toString().padStart(2,'0');
    const timeSec = time.getSeconds().toString().padStart(2,'0');
    const timeH1 = document.querySelector(".time");
    timeH1.innerText = `${timeMin}:${timeSec}`;
}

// 시간의 앞에 0을 넣는 경우 다음과 같이 할 수 있다.
// 유용한 함수 padStart(); // 문자열만 지원함
console.log('3'.padStart(2,'0'));

setInterval(setTime, 1000);

const startTime = new Date();

function getTime() {
    const thisTime = new Date();
    const timer = new Date(thisTime - startTime);
    const timeMin = timer.getMinutes().toString().padStart(2,'0');
    const timeSec = timer.getSeconds().toString().padStart(2,'0');
    const timeH2 = document.querySelector("#time2");
    timeH2.innerText = `${timeMin}:${timeSec}`;
}

setInterval(getTime, 1000);