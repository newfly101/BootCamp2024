// tag를 가져오는 방법
let timeElement  = document.getElementById("time");
timeElement.style.color = 'tomato';
timeElement.innerText = '00:01';
console.log(timeElement);

const timeSelector = document.querySelector("h1");
console.log(timeSelector);
console.log(timeSelector.innerText);


const timeSelectorById = document.querySelector("#time");
console.log("id를 갖고오는 경우 #을 붙이고, "+timeSelectorById.innerText);

const timeSelectorByClass = document.querySelector(".time");
console.log("class를 갖고오는 경우 .을 붙이고, "+timeSelectorByClass.innerText);

document.title = "안녕하세요";

// event를 넣는 방법

function clickedFunction() {
    if (timeElement.style.color === 'orange') {
        timeElement.style.color = 'tomato';
        timeElement.innerText = '00:01';
    } else {
        timeElement.style.color = "orange";
        timeElement.innerText = "12:00";
    }
}

timeSelectorById.addEventListener('click', clickedFunction);
timeSelectorById.addEventListener('mouseover', clickedFunction);
window.addEventListener("copy", clickedFunction);
window.addEventListener("resize", clickedFunction);