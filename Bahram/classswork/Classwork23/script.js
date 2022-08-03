const enter = document.getElementById("enter");

const second = document.getElementById("second");

const reverse = document.getElementById("reverse");

let negro = '';

function helloThere() {
    second.value = enter.value + Math.round(Math.random() * 900 + 100)
    console.log(enter.value)
    console.log(second.value)

    for (let i = second.value.length - 1; i >= 0; i--) {
        negro += second.value[i]
    }

    console.log(negro)

    reverse.value = negro;

}