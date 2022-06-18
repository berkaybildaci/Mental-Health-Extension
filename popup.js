document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('timeButton');
  link.addEventListener('click', function(){
    countDownDate = new Date().getTime()+1*60*100;
    urMom();
  });
});

var randomnumber;
var minNumber;
var maxNumber;
var pictures = new Array("/rngimages/berkaydaboss1.jpg",
"/rngimages/berkaydaboss2.jpg",
"/rngimages/berkaydaboss3.jpg",
"/rngimages/berkaydaboss4.jpg",
"/rngimages/berkaydaboss5.jpg",
"/rngimages/berkaydaboss6.jpg",
"/rngimages/berkaydaboss7.jpg",
"/rngimages/berkaydaboss8.jpg",
"/rngimages/berkaydaboss9.jpg",
"/rngimages/berkaydaboss10.jpg");
function getNumber() {
  var minNumber = 1; // The minimum number you want
  var maxNumber = 9; // The maximum number you want
  randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  //document.getElementById("myNumber").innerHTML = randomnumber; // Sets content of <div> to number
  console.log(document.getElementById('1').src);
  return false; // Returns false just to tidy everything up
}



window.onload = getNumber; // Runs the function on click
    //imagetoChange.classList.remove("disabled");
function urMom(){

console.log(document.getElementById('1').src);
console.log("hello if you are reaching here");
// The data/time we want to countdown to

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s " 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "Motivation Time!";
    document.getElementById('1').src = pictures[randomnumber];
    document.getElementById('1').classList.remove('disabled');
    document.getElementById('1').classList.add('enabled');
}
}, 1000);
}