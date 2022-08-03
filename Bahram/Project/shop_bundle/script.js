    let rembo = new Array();

    document.querySelector("html").style.scrollBehavior = "smooth";

    function inNiray() {

        for (let i = 0; i < localStorage.getItem("counter-for-new-computers"); i++) {
            var data = localStorage.getItem("data_for_new_computers-" + i);

            var data_base = {
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
            }

            rembo.push(data_base);

            console.log();

            addCard(data_base);

        }


    }

    inNiray();

    function addCard(div_) {


        var div = document.createElement("div");

        div.classList.add("car");

        div.innerHTML =
            `
    <img src="${div_.url}" alt="Couldn't load that image">
    <h3>${div_.naming}</h3>
    <hr>
    <h5 class="text_desc">Price: ${div_.price}  </h5>
    <h5 class="text_desc">Conditon: ${div_.condition} </h5>
    <h5 class="text_desc ">OS: ${div_.os}</h5>
    <button class="glow-on-hover" onclick="addBasket(this)">Add</button>`;

        console.log(div);

        var main = document.querySelector("#cards_main");

        main.appendChild(div);
        console.log(main);

    }

    function baseLoad() {
        document.querySelector("#cards_main").innerHTML = "";

        for (card of rembo) {
            addCard(card);
        }
    }

    baseLoad();

    // function searchCardName(input){
    //     for(i = 0; i<0; i++){
    //         if(input.value != ""){
    //             for(cards of rembo){
    //                 if(cards.naming.toLocaleLowerCase().startsWith(input)){
    //                     document.querySelector("#cards_main").innerHTML = "";
    //                     addCard(cards);
    //                     console.log(input)
    //                 }
    //             }
    //         }else{
    //             baseLoad();
    //             console.log(document.getElementsByTagName("input")[i])
    //         }


    //         if(document.querySelector("#cards_main").childElementCount = localStorage.getItem("counter_for_new_computers")){
    //             document.querySelector("#cards_main").innerHTML = "";
    //         }
    //     }
    // }

    function searchCardName(input_body) {
        if (input_body.value != "") {
            for (card of rembo) {
                if (card.naming.toLocaleLowerCase().startsWith(input_body.value)) {
                    document.getElementById("cards_main").innerHTML = "";
                    addCard(card);
                    console.log("if statement")
                }
            }
        } else {
            baseLoad();
            console.log("Base Load")
        }
        if (document.getElementById("cards_main").childElementCount === 0) {
            document.getElementById("cards_main").textContent = "That car was not found"
        }

    };


    function addBasket(elem) {
        var naming = elem.parentElement.children[1].textContent;

        console.log(naming);

        var price = elem.parentElement.children[3].textContent.substr(7, 10);

        console.log(price);

        var img_url = elem.parentElement.children[0].getAttribute("src");

        // var id = document.querySelector("tbody").childElementCount;

        var td_id = document.createElement("td");

        var tr = document.createElement("tr");

        var td_naming = document.createElement("td");

        var td_price = document.createElement("td");

        var img = document.createElement("img");

        img.setAttribute("src", img_url);

        var td_img = document.createElement("td");

        td_img.appendChild(img);

        var td_input = document.createElement("td");

        var input = document.createElement("input");

        input.setAttribute("type", "number");

        input.setAttribute("onchange", "newSum(this)")

        td_input.appendChild(input);

        var td_sum = document.createElement("td");

        var delete_td = document.createElement("td");

        var delete_btn = document.createElement("button");

        td_sum.classList.add("summing");

        delete_btn.classList.add("btn");

        delete_btn.classList.add("btn-danger");

        delete_btn.textContent = "Delete";

        delete_td.appendChild(delete_btn);

        td_naming.textContent = naming;

        td_price.textContent = price;

        delete_td.appendChild(delete_btn);

        delete_btn.setAttribute("onclick", "deleteFun(this)")

        tr.appendChild(td_id)

        tr.appendChild(td_naming);

        tr.appendChild(td_price);

        tr.appendChild(td_img);

        tr.appendChild(td_input);

        tr.appendChild(td_sum);

        tr.appendChild(delete_td);

        document.querySelector("tbody").appendChild(tr);

        td_id.textContent = document.querySelector("tbody").childElementCount;

        var basket = document.querySelector("#number_basket");

        var id = document.querySelector("tbody").childElementCount;

        basket.textContent = id;

    }

    function deleteFun(elem) {
        var tr = elem.parentElement.parentElement;

        tr.remove();
    }

    function newSum(elem) {

        console.log(elem.value)
        var sum = elem.parentElement.parentElement.children[5];

        var price = elem.parentElement.parentElement.children[2].textContent;

        sum.textContent = Number(price) * Number(elem.value);

        var sum = document.querySelectorAll(".summing");


        ovFun();

        function ovFun() {
            var tota_sum = new Array();

            for (num of sum) {
                tota_sum.push(Number(num.textContent));
            }

            console.log(tota_sum);

            var overall = document.querySelector("#overall");

            var nemo = 0;

            for (i = 0; i < tota_sum.length; i++) {
                nemo += Number(tota_sum[i]);
                console.log(nemo);
            }

            document.querySelector("#overall").textContent = "Total cost: " + nemo;
        }
    }



    function change(elem) {

        console.log(elem);

        if (elem.children[1].textContent == "0") {
            var rem = document.querySelector("#basket_empty");
            rem.classList.remove("hiding_");
            console.log("One");
        } else {
            var hiding = document.querySelectorAll(".hiding");

            hiding[0].classList.remove("hiding");

            hiding[1].classList.remove("hiding");
        }
    }

    // function newAmount() {

    // }

    function newDis(elem) {
        document.querySelector("#basket_empty").classList.add("hiding_");
        console.log("Passed");
        console.log(document.querySelectorAll(".hiding").length);
    }

    function clearAll() {
        document.querySelector("tbody").innerHTML = "";
    }


    function shadowFun() {
        rescueMe();

        function rescueMe() {
            document.querySelector("#shadow").classList.add("hiding");

            document.querySelector("#buy_items").classList.add("hiding");
        }
    }

    function saveContactInfo() {

        newSavings();

        function newSavings() {
            if (localStorage.getItem("counter-for-new-details") == null) {
                localStorage.setItem("counter-for-new-details", 0);
            }

            const information = document.querySelectorAll(".information");

            const full_name = information[0].value;

            const address = information[1].value;

            const p_number = information[2].value;

            const mail = information[3].value;

            const note = information[4].value;

            const data_for_new_details = full_name + "---" + address + "---" + p_number + "---" + mail + "---" + note;

            let id = localStorage.getItem("counter-for-new-details");

            localStorage.setItem("information-for-details-" + id, data_for_new_details);

            localStorage.setItem("counter-for-new-details", id++);
            return true;
        }

        document.querySelector("#contact_details").classList.add("hiding-")

        document.querySelector("#shadow").classList.add("hiding");
    }

    function submitOrder(elem) {
        newDis();

        function newDis() {
            elem.parentElement.classList.add("hiding");
            document.querySelector("#contact_details").classList.remove("hiding-");
        }

        newSavings();

        function newSavings() {
            console.log("Function newSavings is activated");

            var id_for_counter_of_items = 0;

            var id_for_info_for_orders = 0;

            var number_of_items = document.querySelector("#negrosas").childElementCount;

            for (let i = 0; i < number_of_items; i++) {

                var negrosa = 0;

                const number_of_items_z = document.querySelector("#negrosas").childElementCount;

                const full_date = new Date();

                const month = full_date.getMonth();

                const year = full_date.getFullYear();

                const day = full_date.getDay();

                const total_date = day + "/" + month + "/" + year;

                console.log(total_date);

                const price = document.querySelector("#negrosas").children[i].children[2].textContent.split(" ")[1];

                console.log(price);

                const amount = document.querySelector("#negrosas").children[i].children[4].children[0].value;

                const total_price = document.querySelector("#negrosas").children[i].children[5].textContent;

                const naming = document.querySelector("#negrosas").children[i].children[1].textContent;

                const total_info_for_model = total_date + "---" + price + "---" + amount + "---" + total_price + "---" + naming;

                localStorage.setItem("data_for_order_model-" +i, total_info_for_model);

                localStorage.setItem("counter-for-order-models", i);

                id_for_counter_of_items++;

                negrosa++;
            }

            id_for_info_for_orders++;

            localStorage.setItem("order_buy_counter",id_for_info_for_orders);

        }
}