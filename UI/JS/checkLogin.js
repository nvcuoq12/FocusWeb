async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorLogin = document.getElementById("errorLogin");
    const authContainer = document.getElementById("authContainer");
    try {    const response = await fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await response.json();
        if (data.success){
            console.log("Đăng nhập thành công");
            authContainer.classList.add("hidden");
        }else{
            errorLogin.innerText = "Sai tài khoản hoặc mật khẩu";
        }
    } catch (error){
        errorLogin.innerText = "Không thể kết nối tới server";
    };
}
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    login();
})