const type = document.getElementById("type")

const info = document.getElementById("info")


function funNew() {
    if (type.value.length < 11) {
        alert( `The letter count of the word you have dialed is  "${type.value}"   ${"which is lower than 11"}`);
    } else {
        info.textContent = type.value;
    }
}