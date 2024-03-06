import { REGISTER_URL } from "/js/api/constants.mjs";
import { doFetch } from "./api/auth/doFetch.mjs";

const registerForm = document.querySelector("#reg");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    registerUser(name, email, password);
    windows.location.reload()
});

async function registerUser(name, email, password) {
    await doFetch(REGISTER_URL, false, {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            password,
        }), 
    });
}