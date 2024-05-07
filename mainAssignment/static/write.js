const form = document.getElementById("write-form");


async function createNewWrite() {
    const res = await fetch("/items", {
        method:'POST',
        body: new FormData(form)
    });
    const jsonRes = await res.json();
    if (jsonRes === '200') {
        console.log("글쓰기 생성 : ", jsonRes);
        window.location.pathname = "/";
    } else {
        console.error("이미지 업로드에 실패했습니다.")
    }

}

const handleSubmit = (event) => {
    event.preventDefault();
    createNewWrite();
}


form.addEventListener("submit", handleSubmit);
