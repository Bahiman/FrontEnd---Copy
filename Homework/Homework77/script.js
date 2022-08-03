const negro = document.getElementById("negro")



const brown = document.getElementById("brown")

newFunction();

function newFunction() {
    for (let z = 0; z < 9; z++) {
        brown.innerHTML +=
            "<div class='black' onclick='pabloSmall(this)'></div>";
    }

    const black = document.getElementsByClassName("black");

    for (let i = 0; i < 9; i++) {
        black[i].innerHTML += `<p>${i + 1}</p>`;
        console.log(i);
    }
}

function pabloSmall(brownie) {
    negro.value = brownie.textContent;
}


// function pabloSmall(){
//     negro.value = negru;
// }