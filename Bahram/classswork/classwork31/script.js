
let number = prompt("Year?")

const myFriend = {
    firstName:"Bahram",
    surName:"Gozalov",
    birthday:2009,
    getAge:function (year) {
        console.log(year-this.birthday)
    }
}

myFriend.getAge(number)