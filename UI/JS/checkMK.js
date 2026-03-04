document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("regPassword");
  const confirmPass = document.getElementById("confirmPassword");
  const errorText = document.getElementById("regError");

  confirmPass.addEventListener("input", function () {
    if (password.value !== confirmPass.value) {
      errorText.innerText = "Mật khẩu xác nhận không khớp!";
    } else {
      errorText.innerText = "";
    }
  });

  document
    .getElementById("registerForm")
    .addEventListener("submit", function (e) {
      if (password.value !== confirmPass.value) {
        e.preventDefault();
        errorText.innerText = "Mật khẩu xác nhận không khớp!";
      }
    });
});
