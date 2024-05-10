const form = document.querySelector('#login-form');

const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    // login 한 password 암호화해서 DB로 전달
    const sha256Password = sha256(formData.get("password"));
    formData.set("password", sha256Password);
    console.log("$$$$formData id : ",formData.get("userId"));
    console.log("$$$$formData pw : ",formData.get("password"));

    const res = await fetch("/login", {
        method: 'POST',
        body: formData
    });

    const jsonRes = res.json();

    // jsonRes.then(result => {
    //     if (result.status === '200') {
    //         console.log(result);
    //     }
    // })
}

form.addEventListener('submit', handleSubmitLogin);