
const info_input = document.getElementsByClassName("all_text");

const show_me = document.getElementById("show");

function show_Text(){
for(let i = 0; i<6; i++){
    console.log(i)
    show_me.textContent += info_input[i].value;
}
 console.log(i)
}