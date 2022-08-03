
function onSubmit(){
    if (localStorage.getItem("counter-for-users") == null){
        localStorage.setItem("counter-for-users", 0);
    }

    const mail = document.getElementsByClassName("info")[0].value;
    console.log(mail);

    const passowrd = document.getElementsByClassName("info")[1].value;
    console.log(passowrd);

    if(mail === "" || passowrd === ""){
        return false;
    }else{
        const data_of_user_details = mail + "---" + passowrd;
        console.log(data_of_user_details);
        let id = localStorage.getItem("counter-for-users");
        localStorage.setItem("data_of_users-" + id, data_of_user_details);
        localStorage.setItem("counter-for-users", ++id)
        return true;
    }
}