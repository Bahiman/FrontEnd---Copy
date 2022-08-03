function checkMe() {
    if (localStorage.getItem("logged") == "true") {

        let avatar = document.getElementById("avatar");

        let mail = localStorage.getItem("current_mail");

        avatar.textContent = mail;

        var buttons = document.querySelector("#logg");
        console.log(buttons);

        console.log(buttons);

        buttons.classList.add("hide_true");

        // console.log(mail);
    } else {
        const buttons = document.querySelectorAll(".glow-on-hover");

        buttons[2].classList.remove("hide_true")
        for(i=4; i<7; i++){
            buttons[i].classList.add("log-hide")
        }
    }
}

function logOut(){
    localStorage.setItem("logged", "false");
    localStorage.setItem("current-mail", "");
}



// checkMe();
checkMe();