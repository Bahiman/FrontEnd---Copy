
let sportList = ["Ronaldo", "Messi", "Neymar" , "Lewandowski"]

 function writeList(){
     console.log(sportList)
 }

 function addEnd(){
    let findEnd;

    findEnd= prompt("What is the name of the new sportsman?")

     sportList.push(findEnd)
 }

function deleteEnd(){
    sportList.pop()
}   

function addBeginning(){
    let findBeginning;

    findBeginning= prompt("What is the name of the new sportsman?")

    sportList.unshift(findBeginning)
}

function deleteBeginning(){
    sportList.shift()
}