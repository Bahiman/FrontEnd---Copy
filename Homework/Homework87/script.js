function dangLosers() {
    if (localStorage.getItem("counter") == null) {
        localStorage.setItem("counter", 0);
    }

    const game = document.getElementsByClassName("information")[0];
    const genre = document.getElementsByClassName("information")[1];
    const protagonist = document.getElementsByClassName("information")[2];
    const profile = document.getElementsByClassName("information")[3];
    const price= document.getElementsByClassName("information")[4];

    console.log(game);

    if (game.value === "" || genre.value === "" || protagonist.value === "" || profile.value ==="" || price.value ==="") {
        return false;
    } else {
        const data_to_save = game.value + "---" + genre.value + "---" + protagonist.value + "---" + profile.value + "---" + price.value;
        let id = localStorage.getItem("counter");
        localStorage.setItem("mydata-" + id, data_to_save);
        localStorage.setItem("counter", ++id);
        return true; 
    }

    console.log("negrosa");
};

//<p data-v-b0857b18="">交易订单UB2111280117201514已被系统强制付款，如有疑问请联系客服</p>

// console.log("negrosa")