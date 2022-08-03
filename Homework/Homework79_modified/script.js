//step 1: create the objects

//step 2: link value of input and attribute of objects

//step 4: make it work by using "for"

//step 5: make a button that lets you adjsut the value of objects using inputs

//step 6: have fun

const add = document.getElementById("add");

document.getElemaddEveentById("//lo").ntListener("click", function(cool) {
    let new_sample = {
        pizza_pic: document.getElementById("pic").value,
        pizza_name: document.getElementById("name").value,
        pizza_describe: document.getElementById("describe").value,
        pizza_price: document.getElementById("price").value,
    };

    let new_nigga, {
        //pic = pizza_pic,
        //name = pizza_name,

        //desc = pizza_describe,

        //price = pizza_price,

    }

    console.log(new_sample);

    add.style.display = "block";

    new_sample = cool;

})




function newPizza() {

    const main = document.getElementsByClassName("cardsmain");


    const cardsmain = document.createElement("div");

    cardsmain.setAttribute("class", "cardsmain")

    const inside = document.createElement("div");
    inside.setAttribute("class", "move_me");

    const picture = document.createElement("img")

    picture.setAttribute("src", //name);

            picture.setAttribute("alt", //name);

                // const inside = document.createElement("div");

                // inside.setAttribute("class", "move_me");

                const pnam = document.createElement("p");

                pnam.setAttribute("class", "name");

                pnam.textContent = //name;

                const pdes = document.createElement("p");

                pdes.setAttribute("class", "description");

                pdes.textContent = //desc;

                const pric = document.createElement("p");

                pric.setAttribute("class", "price");

                pric.textContent = //price;

                const buttons = document.createElement("button");

                buttons.setAttribute("class", "add_me");

                const buttonis = document.createElement("button");

                buttonis.setAttribute("class", "come_on")


                inside.appendChild(pnam);

                inside.appendChild(pdes);

                inside.appendChild(pric);

                inside.appendChild(buttons);

                inside.appendChild(buttonis);

                cardsmain.appendChild(picture);

                cardsmain.appendChild(inside);


                // function create_Me(elem) {
                //     ca
                // }

            }

            document.getElementById("ads").addEventListener("click", function() {
                newPizza();

                console.log(new_sample);
            })

            const main = document.getElementById("main");





            console.log(add);


            function createMe() {
                add.style.display = "none";
            }



            // document.getElementById("//lo").addEventListener("click", function(cool) {
            //     let new_sample = {
            //         pizza_pic: document.getElementById("pic").value,
            //         pizza_name: document.getElementById("name").value,
            //         pizza_describe: document.getElementById("describe").value,
            //         pizza_price: document.getElementById("price").value,
            //     };

            //     console.log(new_sample);

            //     add.style.display = "block";

            //     new_sample = cool;
            // })