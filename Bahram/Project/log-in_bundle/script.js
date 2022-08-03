function newRules() {
    var mail = document.querySelectorAll("input")[0].value;
    console.log(mail);

    const password = document.querySelectorAll("input")[1].value;
    console.log(password);

    for (let i = 0; i < localStorage.getItem("counter-for-users"); i++) {
        let information = localStorage.getItem("data_of_users-" + i);

        var inf = {
            mail_: information.split("---")[0],
            password_: information.split("---")[1],
        }

        if (inf.mail_ == mail && inf.password_ == password) {

            let inf = {
                mail_: information.split("---")[0],
                password_: information.split("---")[1],
            }

            localStorage.setItem("logged", "true");
            localStorage.setItem("current_mail", inf.mail_);
        } else {
            return false;
        }
    }


        if(localStorage.getItem("logged") == "true"){
            window.open("index.html", "_blank");
            console.log("Redirected");
        }
    
} 