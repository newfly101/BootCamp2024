const form = document.querySelector('#sign-up-form');

const handleSubmitForm = async (event) => {
    event.preventDefault(); // 페이지 전환 기본 동작 중지
    const formData = new FormData(form);
    const sha256Password = sha256(formData.get("password"));
    console.log("암호화전 : ",formData.get("password"));

    formData.set("password", sha256Password);
    console.log("암호화후 : ",formData.get("password"));

    const res = await fetch("/signup", {
        method: 'POST',
        body: formData
    });

    const jsonRes = res.json();
    console.log(jsonRes);
}

form.addEventListener("submit", handleSubmitForm);