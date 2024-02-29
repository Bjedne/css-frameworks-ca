import { LOGIN_URL } from "/js/api/constants.mjs";
import { doFetch } from "../api/auth/doFetch.mjs";
import { addAuthToken } from "../api/auth/handleAuth.mjs";

const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
    const email = event.target[0].value;
    const password = event.target[1].value;
    loginUser(email, password);
});

async function loginUser(email, password) {
    const response = await doFetch(LOGIN_URL, false, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }), 
    });
    const {accessToken} = response;
    if (accessToken) {
        addAuthToken(accessToken);
        setTimeout(() => {
            window.location.href = "/feed/";
        }, 1000)
        
    } else new Error("No access token provided")
}