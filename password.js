

function savePassword() {
//     localStorage.setItem("Password", Password);
//     window.location = "password.html";
var Password = document.getElementById("password_value").value;
localStorage.setItem("Password",Password);
window.location = "password.html";
}






