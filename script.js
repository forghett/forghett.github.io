// function updateCountdown() {
//     const now = new Date();
//     const date = new Date(2023, 9, 13, 0, 0, 0);
//     const difference = date - now;
  
//     const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((difference - (daysLeft * 24 * 60 * 60)) / (1000 * 60 * 60));
//     const minutesLeft = Math.floor((difference - (daysLeft * 24 * 60 * 60) - (hoursLeft * 60 * 60)) / (1000 * 60));
//     const secondsLeft = Math.floor((difference - (daysLeft * 24 * 60 * 60) - (hoursLeft * 60 * 60) - (minutesLeft * 60)) / 1000);
  
//     document.getElementById("daysLeft").innerHTML = daysLeft;
//     document.getElementById("hoursLeft").innerHTML = hoursLeft;
//     document.getElementById("minutesLeft").innerHTML = minutesLeft;
//     document.getElementById("secondsLeft").innerHTML = secondsLeft;
//   }
  
//   updateCountdown();
  
//   //setInterval(updateCountdown, 1000);
//   // Rimuovi la funzione updateCountdown() e il setInterval associato

// // Aggiungi questo codice per far partire l'animazione dell'aereo all'avvio della pagina
// window.onload = function() {
//     const plane = document.getElementById("plane");
//     plane.style.animationPlayState = "running";
//   };
  