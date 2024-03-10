import { REGISTER_URL } from "/js/api/constants.mjs";
import { doFetch } from "./api/auth/doFetch.mjs";

const registerForm = document.querySelector("#reg");

/**
 * Adds a submit event listener to the registration form, preventing the default form submission
 * and invoking the registerUser function with the provided name, email, and password.
 * Reloads the window after submitting the form.
 */
registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    registerUser(name, email, password);
    alert("Account successfuly created!")
    window.location.reload()
});

/**
 * Registers a new user by sending a POST request with the provided name, email, and password.
 * @async
 * @function registerUser
 * @param {string} name - The user's name for registration.
 * @param {string} email - The user's email address for registration.
 * @param {string} password - The user's password for registration.
 */
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