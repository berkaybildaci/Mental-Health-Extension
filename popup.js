document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('timeButton');
  link.addEventListener('click', function(){
    countDownDate = new Date().getTime()+1*60*100;
    urMom();
  });
});



function getNumber() {
  var minNumber = 1; // The minimum number you want
  var maxNumber = 9; // The maximum number you want
  var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  document.getElementById("myNumber").innerHTML = randomnumber; // Sets content of <div> to number
  return false; // Returns false just to tidy everything up
}



window.onload = getNumber; // Runs the function on click

var imagetoChange = document.getElementById(randomnumber);
document.getElementById(randomnumber).style.height = 0;
    //imagetoChange.classList.remove("disabled");
function urMom(){


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
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
    var imagetoChange = document.getElementById(randomnumber);
    imagetoChange.classList.remove('disabled');

}
}, 1000);
}