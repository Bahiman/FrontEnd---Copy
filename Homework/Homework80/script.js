const main_div = document.getElementById("main");

function addPizza(pizza_object){
    const div_card = document.createElement("div");-
    div_card.setAttribute("class", "card");
    
    const img = document.createElement("img");

    img.setAttribute("src", pizza_object.pizza_img);
    img.setAttribute("alt", pizza_object.pizza_title);

    const span = document.createElement("span");

    const h2 = createElement("h2");
    h2.textcontent = pizza_object.pizza_title;

    const p_desc = document.createElement("p");
    p_desc.setAttribute("class", "desc");
    p_desc.textContent = pizza_object.pizza_desc;

    const p_price = document.createElement("p");
    p_price.textContent = pizza_object.pizza_price;

    const button = document.createElement("button");
    button.setAttribute("onclick", "addToBasket()");
    button.textContent = "Add to card";

    span.appendChild(h2);
    span.appendChild(p_desc);
    span.appendChild(p_price);
    span.appendChild(button);

    div_card.appendChild(img);
    div_card.appendChild(span);

    main_div.appendChild(div_card);
}

const pizza_base = [
    {
        pizza_img:"https://www.google.com/search?q=pizzaphoto&sxsrf=AOaemvL6wMuMrRm149SPyaVxjw46vIVabQ:1640872632038&tbm=isch&source=iu&ictx=1&fir=aGW2_XfaYdfJlM%252CTI5ovNNQx_IxkM%252C_%253BJzmxawu1Re3ZCM%252CrPoPHMiEf84VrM%252C_%253B-fSB1_ytIKKlLM%252CL8flFbi0yiO5RM%252C_%253BkDvQk-qp3Nx33M%252CL_YY9OWBaDG7sM%252C_%253B65gm0N-2QBVT6M%252ClcTXeqwXDm_hxM%252C_%253Bh-pcYEL7OeihmM%252C3L6L1Vy2OXEzrM%252C_%253B6ygY5cLWmG6odM%252CzU6PWbCKBX324M%252C_%253Bpd9GU8no4ivJTM%252C8Q-e6eypgRMDXM%252C_%253BoLoKiaFVYP9qmM%252CLY42PnVU63SEkM%252C_%253BnDMKpR4vDgaHvM%252CrPoPHMiEf84VrM%252C_&vet=1&usg=AI4_-kSJMmEY-d5YD3Ed4dhPXMaEh9foNg&sa=X&ved=2ahUKEwi-qury1ov1AhVNEncKHd3DCq0Q9QF6BAgJEAE#imgrc=kDvQk-qp3Nx33M",
        pizza_title:"Omega Bahram",
        pizza_desc:"Anything you want",
        pizza_price:"19.99$",
    },
    {
        pizza_img:"https://www.google.com/search?q=pizzaphoto&sxsrf=AOaemvL6wMuMrRm149SPyaVxjw46vIVabQ:1640872632038&tbm=isch&source=iu&ictx=1&fir=aGW2_XfaYdfJlM%252CTI5ovNNQx_IxkM%252C_%253BJzmxawu1Re3ZCM%252CrPoPHMiEf84VrM%252C_%253B-fSB1_ytIKKlLM%252CL8flFbi0yiO5RM%252C_%253BkDvQk-qp3Nx33M%252CL_YY9OWBaDG7sM%252C_%253B65gm0N-2QBVT6M%252ClcTXeqwXDm_hxM%252C_%253Bh-pcYEL7OeihmM%252C3L6L1Vy2OXEzrM%252C_%253B6ygY5cLWmG6odM%252CzU6PWbCKBX324M%252C_%253Bpd9GU8no4ivJTM%252C8Q-e6eypgRMDXM%252C_%253BoLoKiaFVYP9qmM%252CLY42PnVU63SEkM%252C_%253BnDMKpR4vDgaHvM%252CrPoPHMiEf84VrM%252C_&vet=1&usg=AI4_-kSJMmEY-d5YD3Ed4dhPXMaEh9foNg&sa=X&ved=2ahUKEwi-qury1ov1AhVNEncKHd3DCq0Q9QF6BAgJEAE#imgrc=kDvQk-qp3Nx33M",
        pizza_title:"Omega Bahram",
        pizza_desc:"Anything you want",
        pizza_price:"19.99$",
    },
    {
        pizza_img:"https://www.google.com/search?q=pizzaphoto&sxsrf=AOaemvL6wMuMrRm149SPyaVxjw46vIVabQ:1640872632038&tbm=isch&source=iu&ictx=1&fir=aGW2_XfaYdfJlM%252CTI5ovNNQx_IxkM%252C_%253BJzmxawu1Re3ZCM%252CrPoPHMiEf84VrM%252C_%253B-fSB1_ytIKKlLM%252CL8flFbi0yiO5RM%252C_%253BkDvQk-qp3Nx33M%252CL_YY9OWBaDG7sM%252C_%253B65gm0N-2QBVT6M%252ClcTXeqwXDm_hxM%252C_%253Bh-pcYEL7OeihmM%252C3L6L1Vy2OXEzrM%252C_%253B6ygY5cLWmG6odM%252CzU6PWbCKBX324M%252C_%253Bpd9GU8no4ivJTM%252C8Q-e6eypgRMDXM%252C_%253BoLoKiaFVYP9qmM%252CLY42PnVU63SEkM%252C_%253BnDMKpR4vDgaHvM%252CrPoPHMiEf84VrM%252C_&vet=1&usg=AI4_-kSJMmEY-d5YD3Ed4dhPXMaEh9foNg&sa=X&ved=2ahUKEwi-qury1ov1AhVNEncKHd3DCq0Q9QF6BAgJEAE#imgrc=kDvQk-qp3Nx33M",
        pizza_title:"Omega Bahram",
        pizza_desc:"Anything you want",
        pizza_price:"19.99$",
    }
];

for (let pizza of pizza_base){
    addPizza(pizza);
}

const new_pizza_form = document.getElementById("new_pizza_form");

document.getElementById("add_pizza").addEventListener("click", function(){
    console.log("3,2,1");
    new_pizza_form.classList.toggle("hide");
});

document.getElementById("add_pizza_button").addEventListener("click", function(){
    let field_1 = document.getElementById("pizza_img");
    let field_2 = document.getElementById("pizza_title");
    let field_3 = document.getElementById("pizza_desc");
    let field_4 = document.getElementById("pizza_price");

    const new_pizza ={
        pizza_img: field_1.value,
        pizza_title: field_2.value,
        pizza_desc: field_3.value,
        pizza_price: field_4.value,
    };

    field_1.value = field_2.value =  field_3.value =field_4.value = "";
    console.log(new_pizza);
    addPizza(new_pizza);
});

const number_of_orders = document.getElementById("number_of_orders");

function addToBasket(elem) {
    number_of_orders.textContent = Number(number_of_orders.textContent) +1;
    console.log(elem.children[0].textContent);
}

