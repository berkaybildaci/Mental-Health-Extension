//Random number generator
var countDownDate=0;
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('timeButton');
  link.addEventListener('click', function(){
      eraseRecoredTime();
      countDownDate = new Date().getTime()+15*60*1000;
      getTime(); 
      
  });
  getTime(); 
});

function eraseRecoredTime() {

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

function getTime()
{
 
// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
   
// Calculating the days, hours, minutes and seconds left
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

function recordTime() {

  chrome.storage.sync.set({"timeInSeconds" : seconds }, function() {
  });
  chrome.storage.sync.set({ "timeInMinutes" : minutes}, function() {
  });
}
recordTime();


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
}, 1000);

}