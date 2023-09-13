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

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);

function moveImage() {
  let erci = document.getElementById("erci");
  let colosseo = document.getElementById("colosseo");

  let distance = colosseo.offsetLeft - erci.offsetLeft;
  let speed = distance / (days * 24 * 60 * 60);

  erci.style.left = erci.offsetLeft + speed * seconds + "px";

  if (erci.offsetLeft < colosseo.offsetLeft) {
    erci.style.transform = "rotate(180deg)";
  } else if (erci.offsetLeft > colosseo.offsetLeft) {
    erci.style.transform = "rotate(0deg)";
  }
}

window.onload = function() {
  moveImage();
};
