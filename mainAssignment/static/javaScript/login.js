const form = document.querySelector('#login-form');
const info = document.querySelector("#info");

async function getItemsAuth() {
    const addBtn = document.createElement("button");
    const access_token = window.localStorage.getItem('token');
    addBtn.innerText = "get";
    info.appendChild(addBtn);

    addBtn.addEventListener("click", async () => {
        const res = await fetch("/items", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = await res.json();
        console.log("@@@@@@@@@@@@@@@@@@",data);
    });

}


const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // let access_token = null;
    // login 한 password 암호화해서 DB로 전달
    const sha256Password = sha256(formData.get("password"));
    formData.set("password", sha256Password);
    // console.log(`formData : {"id":${formData.get("userId")},\n"password":${formData.get("password")}`);

    const res = await fetch("/login", {
        method: 'POST',
        body: formData
    });

    const jsonRes = res.json();

    jsonRes.then( res => {
        // console.log("###",res.access_token);
        console.log("###",res);
        // console.log(res['user']);
        if (res.status === '500') {
            console.log("등록된 사용자가 없습니다.");
        } else if (res.status === '401') {
            console.log("비밀번호가 일치하지 않습니다.");
        } else {
            const access_token = res.access_token;
            window.localStorage.setItem("token",access_token);
            window.sessionStorage.setItem("token",access_token);
            // console.log("##########:", access_token);
            info.innerText = '로그인 되었습니다.';
            getItemsAuth(); /// <<<<<<<<<<<<<<<<<여기서 오류남
            // window.location.pathname = "/";
        }
    });

}

form.addEventListener('submit', handleSubmitLogin);