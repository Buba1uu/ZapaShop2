document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");

    const showRegisterLink = document.getElementById("showRegister");
    const showLoginLink = document.getElementById("showLogin");

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const loginError = document.getElementById("loginError");
    const registerError = document.getElementById("registerError");

    showRegisterLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginSection.classList.add("hidden");
        registerSection.classList.remove("hidden");
    });

    showLoginLink.addEventListener("click", function (e) {
        e.preventDefault();
        registerSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            loginError.textContent = "Por favor, completa todos los campos.";
        } else {
            loginError.textContent = "";
            alert("Inicio de sesión exitoso");
        }
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newEmail = document.getElementById("newEmail").value;
        const newPassword = document.getElementById("newPassword").value;

        if (newUsername === "" || newEmail === "" || newPassword === "") {
            registerError.textContent = "Por favor, completa todos los campos.";
        } else {
            registerError.textContent = "";
            alert("Registro exitoso");
        }
    });
});