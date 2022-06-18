//Random number generator
var countDownDate=0;
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('timeButton');
  link.addEventListener('click', function(){
      countDownDate = new Date().getTime()+15*60*1000;
      getTime(); 
  });
  countDownDate = new Date().getTime()+15*60*1000;
  getTime(); 
});



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
  

// The data/time we want to countdown to
 //var countDownDate = new Date("Jul 25, 2022 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//chrome.runtime.onInstalled.addListener(() => {
//  chrome.storage.sync.set({minutes: minutes });
  
//});

// chrome.storage.sync.set({ minutes });
// chrome.storage.sync.set({ seconds }); 

//chrome.stroage.sync.get(({ minutes }) => {
//document.getElementById("mins").innerHTML = minutes;
//});

// Result is output to the specific element
 document.getElementById("mins").innerHTML = minutes + "m " 
 document.getElementById("secs").innerHTML = seconds  + "s " 
  


// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);

}
