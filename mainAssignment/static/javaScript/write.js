const form = document.getElementById("write-form");


async function createNewWrite() {
    const body = new FormData(form);
    body.append('createdTime', new Date().getTime());
    try{
        const res = await fetch("/items", {
            method:'POST',
            body: body
        });
        const jsonRes = await res.json();
        if (jsonRes === '200') {
            // console.log("글쓰기 생성 : ", jsonRes);
            window.location.pathname = "/";
        }
    } catch (error) {
        console.error("이미지 업로드에 실패했습니다.", error);
    }

}

const handleSubmit = (event) => {
    event.preventDefault();
    createNewWrite();
}


form.addEventListener("submit", handleSubmit);
