const form = document.querySelector('#sign-up-form');

const handleSubmitForm = async (event) => {
    event.preventDefault();
    const body = new FormData();
    const res = await fetch("/signup", {
        method: 'POST',
        body: body
    });
    console.log(res.json());
}

form.addEventListener("submit", handleSubmitForm);