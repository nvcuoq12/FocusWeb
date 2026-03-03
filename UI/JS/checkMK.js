const password = document.getElementById("regPassword");
const comfirmPass = document.getElementById("confirmPassword");
const errorText = document.getElementById("regError");

// KiemTraRealTime
comfirmPass.addEventListener("input", function () {
  if (password.value != comfirmPass.value) {
    errorText.innerText = "Mật khẩu xác nhận ko khớp!";
  } else {
    errorText.innerText = "";
  }
});

//Kiem tra khi submit
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // chan gui form

    if (password.value != comfirmPass.value) {
      errorText.innerText = "Mật khẩu xác nhận không khớp";
      return;
    }
    alert("Đăng ký thành công!");
  });
