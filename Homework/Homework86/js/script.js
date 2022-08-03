function dangLosers() {
    if (localStorage.getItem("counter") == null) {
        localStorage.setItem("counter", 0);
    }

    const full_name = document.getElementsByClassName("information")[0];
    const country = document.getElementsByClassName("information")[1];
    const city = document.getElementsByClassName("information")[2];
    const mail = document.getElementsByClassName("information")[3];
    const profile = document.getElementsByClassName("information")[4];
    const nickname = document.getElementsByClassName("information")[5];

    console.log(full_name.value)

    if (full_name.value === "" || country.value === "" || city.value === "" || mail.value === "" || profile.value ==="" || nickname.value ==="") {
        return false;
    } else {
        const data_to_save = full_name.value + "---" + country.value + "---" + city.value + "---" + mail.value + "---" + profile.value + "---" + nickname.value;

        let id = localStorage.getItem("counter");
        localStorage.setItem("mydata-" + id, data_to_save);
        localStorage.setItem("counter", ++id);
        return true;
    }
}