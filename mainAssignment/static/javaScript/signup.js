const form = document.querySelector('#sign-up-form');
const info = document.querySelector('#info');

function checkPassword(formData) {
    const checkPassword = document.querySelector('#checkPassword');
    checkPassword.innerText = '';
    info.innerText = '';
    // console.log("password",formData.get("password"));
    // console.log("password",formData.get("password-check"));
    if (formData.get("password") === formData.get("password-check")) {
        checkPassword.innerText = "비밀번호가 일치합니다.";
        checkPassword.style.color = 'blue';
        return true;
    } else {
        checkPassword.innerText = "비밀번호가 다릅니다.";
        checkPassword.style.color = 'red';
        return false;
    }
}

const handleSubmitForm = async (event) => {
    event.preventDefault(); // 페이지 전환 기본 동작 중지
    const formData = new FormData(form);
    const boolean = checkPassword(formData);
    if ( boolean === true ) {
        const sha256Password = sha256(formData.get("password"));
        // console.log("암호화전 : ",formData.get("password"));

        formData.set("password", sha256Password);
        // console.log("암호화후 : ",formData.get("password"));

        const res = await fetch("/signup", {
            method: 'POST',
            body: formData
        });

        const jsonRes = res.json();
        // console.log(jsonRes);
        jsonRes.then(result => {
            // console.log(result);
            if (result.status === '200') {
                info.innerText = '회원가입에 성공했습니다.';
                info.style.color = 'blue';
            } else {
                info.innerText = '';
            }
        });
    }
}

form.addEventListener("submit", handleSubmitForm);