function newFunction(id) {
    var data_from_localstorage = localStorage.getItem(`mydata-${id}`);

    var full_name = data_from_localstorage.split("---")[0];

    var country = data_from_localstorage.split("---")[1];

    var city = data_from_localstorage.split("---")[2];

    var mail = data_from_localstorage.split("---")[3];

    var profile = data_from_localstorage.split("---")[4];

    var nickname = data_from_localstorage.split("---")[5];

    cardData(full_name, country, city, mail, profile, nickname);

}

function cardData(full_name, country, city, mail, profile, nickname){
    const main = document.getElementById("main");

    const card = document.createElement("div");

    card.setAttribute("class", "card");

    const card_body = document.createElement("div");

    card_body.setAttribute("class", "card-body");

    const card_full_name = document.createElement("p");

    card_full_name.textContent = full_name;

    card_full_name.setAttribute("class", "card-text");

    const card_country = document.createElement("p");

    card_country.textContent = country;

    card_country.setAttribute("class", "card-text")

    const card_city = document.createElement("p");

    card_city.textContent = city;

    card_city.setAttribute("class", "card-text");

    const card_mail =  document.createElement("p");

    card_mail.setAttribute("class", "card-text");

    card_mail.textContent = mail;

    // const hr = document.createElement("hr");

    const profile_pic = document.createElement("img");

    profile_pic.setAttribute("src", profile);

    profile_pic.setAttribute("class", "card-img-top")

    const card_nickname = document.createElement("h5");

    card_nickname.setAttribute("class", "card-title");

    card_nickname.textContent = nickname;

    card_body.appendChild(card_nickname);
    
    card_body.appendChild(card_full_name);

    card_body.appendChild(card_country);

    card_body.appendChild(card_city);

    card_body.appendChild(card_mail);

    card.appendChild(profile_pic);

    card.appendChild(card_body);

    card.setAttribute("class", "col");

    main.appendChild(card);
}


for (let i = 0; i<localStorage.getItem("counter"); i++ ){
    newFunction(i);
}
