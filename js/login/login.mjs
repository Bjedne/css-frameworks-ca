import { LOGIN_URL } from "/js/api/constants.mjs";
import { doFetch } from "../api/auth/doFetch.mjs";
import { addAuthToken, addUserName } from "../api/auth/handleAuth.mjs";

const loginForm = document.querySelector("#login");

// Adds a submit event listener to the login form, preventing the default form submission
// and invoking the loginUser function with the provided email and password.
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    loginUser(email, password);
});

/**
 * Attempts to log in a user by sending a POST request with the provided email and password.
 * If successful, stores the received access token and user name, then redirects to the feed page.
 * @async
 * @function loginUser
 * @param {string} email - The user's email address for authentication.
 * @param {string} password - The user's password for authentication.
 * @throws {Error} If the login request fails or no access token is provided in the response.
 */
async function loginUser(email, password) {
    const response = await doFetch(LOGIN_URL, false, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const {accessToken, name} = response;
    if (accessToken) {
        addAuthToken(accessToken);
        addUserName(name);
        setTimeout(() => {
            window.location.href = "/feed/";
        }, 1000)  
    } else {
        alert("Incorrect username or password");
        throw new Error("No access token provided");
    }
}

