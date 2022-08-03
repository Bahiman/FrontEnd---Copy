let xx = 0;

let cc = 0;

let vv = 0;

let seconds = document.getElementById("seconds");

let minutes = document.getElementById("minutes");


let circles = document.getElementById("circle");

document.getElementById("start").addEventListener("click", function newSeconds_() {
  function newSeconds() {
    stopMe();
    stoptime
    console.log(xx);
    console.log(cc);

    if (xx == 59) {
      xx = 0;
      ++cc;
    } else {
      ++xx;
    }
    seconds.textContent = ":" + xx;
    minutes.textContent = cc;
  }
  setInterval(newSeconds, 1000);
})


// What does the fox say and also set



newSeconds_();


 document.getElementById("pause").addEventListener("click", function pauseMe(){
  clearInterval(myInterval);
 })




document.getElementById("stop").addEventListener("click", function stopMe(){
  
})

// document.getElementsByName("")