

const show = document.getElementById("show")

function textCount(){
    for(let i = 0; i<=100; i++){
        console.log(i)
        show.textContent += i;
    }
}