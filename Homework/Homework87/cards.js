function newFunction(id) {
    var data_from_localstorage = localStorage.getItem(`mydata-${id}`);

    var game = data_from_localstorage.split("---")[0];

    var genre = data_from_localstorage.split("---")[1];

    var protagonist = data_from_localstorage.split("---")[2];

    // // var mail = data_from_localstorage.split("---")[3];

    var profile = data_from_localstorage.split("---")[3];

    var price = data_from_localstorage.split("---")[4];

    cardData(game, genre, protagonist,  profile, price);

    console.log(data_from_localstorage);

}

function cardData(game, genre, protagonist,  profile, price){
    const main = document.getElementById("main");

    const card = document.createElement("div");

    card.setAttribute("class", "card");

    const card_body = document.createElement("div");

    card_body.setAttribute("class", "card-body");

    const card_game = document.createElement("p");

    card_game.textContent = game;

    card_game.setAttribute("class", "card-text");

    const card_genre = document.createElement("p");

    card_genre.textContent = genre;

    card_genre.setAttribute("class", "card-text")

    const card_city = document.createElement("p");

    card_city.textContent = protagonist;

    card_city.setAttribute("class", "card-text");

    // const card_mail =  document.createElement("p");

    // card_mail.setAttribute("class", "card-text");

    // // card_mail.textContent = mail;

    // const hr = document.createElement("hr");

    const profile_pic = document.createElement("img");

    profile_pic.setAttribute("src", profile);

    profile_pic.setAttribute("class", "card-img-top")

    const card_price = document.createElement("h5");

    card_price.setAttribute("class", "card-title");

    card_price.textContent = price;

    const button  = document.createElement("button");

    button.textContent = "Buy";

    button.setAttribute("class", "btn-primary");

    button.setAttribute("onclick", "elPrimo()")

    card_body.appendChild(card_price);
    
    card_body.appendChild(card_game);

    card_body.appendChild(card_genre);

    card_body.appendChild(card_city);

    // card_body.appendChild(card_mail);

    card.appendChild(profile_pic);

    card.appendChild(card_body);
    
    card.appendChild(button);

    card.setAttribute("class", "col");

    main.appendChild(card);
}


for (let i = 0; i<localStorage.getItem("counter"); i++ ){
    newFunction(i);
}

let purchased_player_arra345y = [];

// function buyPLayer


function elPrimo(){
     const tr = document.createElement("tr");

     const td_n = document.createElement("td");
    td_n.textContent = 0;

    const td_game = document.createElement("td");
    td_game.textContent = game;

    const td_price = document.createElement("td");
    td_price.textContent = price;

    const td_amount = document.createElement("td");

    const input_amount = document.createElement("input");
    input_amount.type = "number";

    td_amount.appendChild(input_amount);

    tr.appendChild(td_n);

    tr.appendChild(td_game);

    tr.appendChild(td_price);

    tr.appendChild(td_amount);

    document.getElementsByTagName("tbody")[0].appendChild(tr);

}


