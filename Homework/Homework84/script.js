 function newCard() {
     const nigera = document.createElement("div");

     nigera.setAttribute("class", "cardme");

     var cards = document.getElementById("cards");

     cards.appendChild(nigera)  

     // const 

     const capital = document.createElement("p");

     capital.textContent = "Baku"

     nigera.appendChild(capital);

     const country = document.createElement("p");

     country.textContent = "Azerbaijan";

     nigera.appendChild(country);

     const image = document.createElement("img");

     image.setAttribute("src", "data:image/jpeg;base64,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  ")

     // console.log(button);

     const button = document.createElement("button");

     button.innerHTML = "HELLO";

     nigera.appendChild(button);

     nigera.appendChild(image);


 };

 newCard();

 // console.log(cards);

 function newNegro() {
     console.log(cards);
     document.getElementById("form").setAttribute("class", "form");

     const dark = document.getElementsByClassName("yomama")[0];

     dark.classList.toggle("hide")


 }

 function ees() {
     console.log("123");

     // setAttribute("class", "hide");
     let field_1 = document.getElementById("field_one");

     let field_2 = document.getElementById("field_two");

     let field_3 = document.getElementById("field_three");

     const new_card = {
         card_name: field_1.value,
         card_city: field_2.value,
         card_image: field_3.value,
     };

     field_1.value = field_2.value = field_3.value = "";

     newCards(new_card)

     const dark = document.getElementsByClassName("yomama")[0];
     dark.classList.toggle("hide");


     document.getElementById("form").classList.toggle("hide");



 }

 function newCards(elem) {
     const card_main = document.getElementById("cards");

     const main = document.createElement("div");


     main.setAttribute("class", "cardme")

     // main.appendChild(main);

     const country = document.createElement("p");

     country.textContent = elem.card_name;

     main.appendChild(country);

     const city = document.createElement("p");

     city.textContent = elem.card_city;

     main.appendChild(city);

     const card_img = document.createElement("img");

     card_img.setAttribute("src", elem.card_image)

     var button = document.createElement("button");

     main.appendChild(button);

     main.appendChild(card_img);

     card_main.appendChild(main);


     button.innerHTML = "Niger";

     main.appendChild(button);

 }

 function newHide() {
     const dark = document.getElementsByClassName("yomama")[0];
     dark.classList.toggle("hide");


     document.getElementById("form").classList.toggle("hide");

     console.log('123')


 }