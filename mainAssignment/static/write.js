const form = document.getElementById("write-form");


async function createNewWrite() {
    const res = await fetch("/items", {
        method:'POST',
        body: new FormData(form)
    });
    const jsonRes = res.json();
    console.log("글쓰기 생성 : ", jsonRes);
}

const handleSubmit = (event) => {
    event.preventDefault();
    createNewWrite();
}


form.addEventListener("submit", handleSubmit);
