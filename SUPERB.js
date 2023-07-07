let Psswrd = localStorage.getItem("Password");

function check() {

    let Given = document.getElementById("password_saved").value;

    if (Given != Psswrd) alert("Incorrect Password");

    else if (Given === Psswrd) {
        window.open("https://www.gmail.com");
        alert("Correct Password");
        localStorage.removeItem("Password");
    }    

}


