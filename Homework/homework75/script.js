
const cute = document.getElementById("cute")

const sin = document.getElementById("sin")


let negro = '';



function ala(){
for(let i=+ cute.value.length - 1; i>=0; i--){
    negro += cute.value[i];
}
console.log(negro)

sin.textContent = negro;
}