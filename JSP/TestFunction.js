const buyProducts = ["AppleWatch","MacBook","IPad","ApplePencle"];

// function 을 사용하는 방법
function getName() {
    for (let i=0; i < 4; i++) {
        console.log(buyProducts[i]);
    }
}
getName();

// if 조건문을 사용하는 방식
function printName() {
    const nickName = prompt("닉네임을 입력해주세요.");

    console.log(nickName);
    if (!nickName) {
        console.log("닉네임 입력이 없습니다.");
    } else if (nickName.length > 8) {
        console.log("닉네임이 너무 깁니다.");
    } else {
        console.log("닉네임은 "+nickName+"입니다.");
    }
}

printName();
// 조건문 규칙
// 1 == '1' // true (type을 비교하지 않고 값만 비교함)
// 1 === '1' // false  ( type도 비교하고 값도 비교함)

