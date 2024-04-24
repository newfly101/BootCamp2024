console.log("안녕하세요!!");
const aNumber = 1234;
console.log(aNumber);

const str1 = '안녕하세요 ';
const str2 = '테스트 메시지입니다.';
console.log(str1+str2);

// const 는 변하지 않는 값을 저장하는 경우 사용

let str3 = '!!???';
console.log(str1+str2+str3);
str3 = '?????!!!';
console.log(str1+str2+str3);

// 배열

const buyProduct1 = "AppleWatch";
const buyProduct2 = "MacBook";
const buyProduct3 = "IPad";
const buyProduct4 = "ApplePencle";

const buyProduct = ["AppleWatch","MacBook","IPad","ApplePencle"];

console.log(buyProduct[0]);

// Object type

const myProfile = {
    name : '재홍',
    gender : '남성',
    address : '송파구',
    job : 'gamer',
    age : 29
}

console.log(myProfile);
console.log(myProfile["name"]);
console.log(myProfile.job);