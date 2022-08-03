function newPc() {
    let hiding = document.getElementsByClassName("hiding");

    hiding[0].classList.remove("hiding");
    // hiding[1].classList.remove("hiding");
}


function cancelRep(){
    
    let shadow = document.querySelector("#shadow")

    shadow.classList.add("hiding");

    console.log(shadow)
    
}

function newSub() {
    if (localStorage.getItem("counter-for-new-computers") == null) {
        localStorage.setItem("counter-for-new-computers", 0);
    }

    const information = document.getElementsByClassName("information");


    const category = information[0].options[information[0].selectedIndex].value;
    console.log(category)

    const ram = information[1].value;
    console.log(ram);

    const name = information[2].value;
    console.log(name);

    const cpu = information[3].value;
    console.log(cpu);

    const price = information[4].value;
    console.log(price);

    const rom = information[5].value;
    console.log(rom);

    const about = information[6].value;
    console.log(about);

    const rom_type = information[7].options[information[7].selectedIndex].value;
    console.log(rom_type);

    const condition = information[8].options[information[8].selectedIndex].value;
    console.log(condition);

    const os = information[9].value;
    console.log(os);

    const url = information[10].value;
    console.log(url);

    const gpu = information[11].value;
    console.log(gpu);

    const data_of_new_computers = category + "---" + ram + "---" + name + "---" + cpu + "---" + price + "---" + rom + "---" + about + "---" + rom_type + "---" + condition + "---" + os + "---" + url + "---" + gpu;
    console.log(data_of_new_computers);
    let id = localStorage.getItem("counter-for-new-computers");
    localStorage.setItem("data_for_new_computers-" + id, data_of_new_computers);
    localStorage.setItem("counter-for-new-computers", ++id);



    return true;
}

function newTable(data_base, i) {


    const tr = document.createElement("tr");

    const td_id = document.createElement("td");

    const td_name = document.createElement("td");

    const image = document.createElement("img");

    const td_image = document.createElement("td");

    td_image.appendChild(image);

    const td_price = document.createElement("td");

    const td_operation = document.createElement("td");

    const operation = document.createElement("button");

    td_operation.appendChild(operation);

    td_id.textContent = i;

    td_name.textContent = data_base.naming;

    image.src = data_base.url;

    image.alt = "Couldn't load image";

    td_price.textContent = data_base.price;

    operation.setAttribute("onclick", "sitDown(this)");

    operation.textContent = "Delete";

    operation.classList.add("btn");

    operation.classList.add("btn-danger");

    function appendThis() {
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_image);
        tr.appendChild(td_price);
        tr.appendChild(td_operation);
        const tbody = document.querySelector('tbody');
        tbody.appendChild(tr);
    }

    appendThis(data_base);
};




function giveMe() {
    for (let i = 0; i < localStorage.getItem("counter-for-new-computers"); i++) {

        const data = localStorage.getItem("data_for_new_computers-" + i);
        console.log(data);

        const data_base = {
            category: data.split("---")[0],
            ram: data.split("---")[1],
            naming: data.split("---")[2],
            cpu: data.split("---")[3],
            price: data.split("---")[4],
            rom: data.split("---")[5],
            about: data.split("---")[6],
            rom_type: data.split("---")[7],
            condition: data.split("---")[8],
            os: data.split("---")[9],
            url: data.split("---")[10],
            gpu: data.split("---")[11],
            body: document.getElementsByTagName("table")[0],
        }

        newTable(data_base, i);
    }
}

giveMe();

function sitDown(elem){
    console.log(elem);

    console.log(elem.parentElement.parentElement);

    const mama = elem.parentElement;

    const papa = elem.parentElement.parentElement;

    console.log(papa.children[0].textContent);

    let id = papa.children[0].textContent;

    localStorage.removeItem("data_for_new_computers-" + id  );

}