//Random number generator
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('timeButton');
  link.addEventListener('click', function(){
    urMom(); 
  });
});

function eraseRecoredTime() {

  chrome.storage.sync.set({"dateToTimeOff" : 0}, function() {
  });
  chrome.storage.sync.set({"timeInSeconds" : 0}, function() {
  });
  chrome.storage.sync.set({ "timeInMinutes" : 0}, function() {
  });
}

function getNumber() {
  var minNumber = 0; // The minimum number you want
  var maxNumber = 100; // The maximum number you want
  var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  document.getElementById("myNumber").innerHTML = randomnumber; // Sets content of <div> to number
  return false; // Returns false just to tidy everything up
}

window.onload = getNumber; // Runs the function on click

function urMom()
{
var countDownDate = new Date().getTime()+15*60*1000;


// Run myfunc every second
setInterval(function() {
alert("your bad");

//1st alert here working
var now = new Date().getTime();
var timeleft =countDownDate-now;

// Calculating the days, hours, minutes and seconds left
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//2nd alert here working

function recordTime() {

  chrome.storage.sync.set({"dateToTimeOff" : countDownDate}, function() {
  });
  chrome.storage.sync.set({"timeInSeconds" : seconds}, function() {
  });
  chrome.storage.sync.set({ "timeInMinutes" : minutes}, function() {
  });
}
recordTime();
//3rd alert here working

chrome.storage.sync.get("timeInSeconds", function(timeDatabase) {
  document.getElementById("secs").innerHTML = timeDatabase.timeInSeconds + "s" 
});
chrome.storage.sync.get("timeInMinutes", function(timeDatabase) {
  document.getElementById("mins").innerHTML = timeDatabase.timeInMinutes + "m" 
});

// Result is output to the specific element
 //document.getElementById("mins").innerHTML = minutes + "m " 
 //document.getElementById("secs").innerHTML = seconds  + "s " 

// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 3000);

}
