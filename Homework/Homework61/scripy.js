

let actors_one ={
    first_name:"Mark",
    last_name:"Hamill",
    film:"New Hope",
    birthday:"1965",

    getFilms:function (film){
        console.log(this.film)
    }
}

actors_one.getFilms()

let actors_two ={
    first_name:"Daisy",
    last_name:"Ridley",
    film:"Rise of Skywalker",
    birthday:"1965",
    
    gefFilms:function (film){
        console.log(this.film)
    }
}
actors_two.gefFilms()

let actors_three ={
    first_name:"Liam",
    last_name:"Nison",
    film:"Phantom Meance",
    birthday:"1952",

    getFilms:function (film){
        console.log(this.film)
    }

}

actors_three.getFilms()

let set = prompt("Dial in the number")

for(let i=5; i<=set; i+=3){
    console.log(i)
}
