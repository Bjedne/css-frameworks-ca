// Code removes both access token and name from the local storage to log the user out from having access to posts
const logoutBtn = document.querySelector("#logoutBtn")

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("name");
})