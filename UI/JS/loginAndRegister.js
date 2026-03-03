const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

const btnLogin = document.getElementById("showLogin");
const btnRegister = document.getElementById("showRegister");

btnRegister.addEventListener("click", function () {
  loginModal.classList.add("hidden");
  registerModal.classList.remove("hidden");
});

btnLogin.addEventListener("click", function () {
  registerModal.classList.add("hidden");
  loginModal.classList.remove("hidden");
});
