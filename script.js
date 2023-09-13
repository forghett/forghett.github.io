let days = 20;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateCountdown() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        days--;
        hours = 23;
      }
    }
  }

  document.getElementById("days-number").innerHTML = days;
  document.getElementById("hours-number").innerHTML = hours;
  document.getElementById("minutes-number").innerHTML = minutes;
  document.getElementById("seconds-number").innerHTML = seconds
