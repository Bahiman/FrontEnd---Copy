
let reset_btn = document.querySelector("#reset_btn");

console.log(reset_btn);

let hiding = document.querySelectorAll(".hide");

console.log(hiding);

let pop_btn_confirm = document.querySelector(".btn-primary");

let pop_btn_cancel = document.querySelector(".btn-secondary");

function loadPop(){
    hiding[0].classList.toggle("hide");
    hiding[1].classList.toggle("hide");
}

function whitenNiger(){
    localStorage.clear();
    hiding[0].classList.toggle("hide");
    hiding[1].classList.toggle("hide");
}

function cancelNiger(){
    hiding[0].classList.toggle("hide");
    hiding[1].classList.toggle("hide");
}

