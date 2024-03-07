const logoutBtn = document.querySelector("#logoutBtn")

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("name");
})