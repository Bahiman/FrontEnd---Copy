
function newFunction(id) {
    var data_from_localstorage = localStorage.getItem(`mydata-${id}`);

    var full_name = data_from_localstorage.split("---")[0];

    var country = data_from_localstorage.split("---")[1];

    var city = data_from_localstorage.split("---")[2];

    var mail = data_from_localstorage.split("---")[3];

    tableData(full_name, country, city, mail, id);

}

function tableData(full_name, country, city, mail, id){
    const body = document.getElementsByTagName("tbody")[0];

    const tr = document.createElement("tr");

    const th_number = document.createElement("th");

    th_number.textContent = ++id;
  
    const td_full_name = document.createElement("td");

    td_full_name.textContent = full_name;

    const td_country = document.createElement("td");

    td_country.textContent = country;

    const td_city = document.createElement("td");

    td_city.textContent = city;

    const td_mail = document.createElement("td");

    td_mail.textContent = mail;

    tr.appendChild(th_number);

    tr.appendChild(td_full_name)

    tr.appendChild(td_country);

    tr.appendChild(td_city);

    tr.appendChild(td_mail);
    
    body.appendChild(tr);
}


for (let i = 0; i<localStorage.getItem("counter"); i++ ){
    newFunction(i);
}