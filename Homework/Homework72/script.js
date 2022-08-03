
const nami = document.getElementById("nami");

const show = document.getElementById("show");

let namu = {};

let number = {};

let result = {};

let end = {};


function random(){
    namu = nami.value
        
    console.log(namu)

    number = Math.random()* 999 +1

    console.log(number)

    end = Math.round(number)

    console.log(end)

    result = namu+end

    console.log(result)

    show.textContent = result
}

document
