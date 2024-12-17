// Data del countdown: Mezzanotte del 25 Dicembre
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

// Simula un giorno in meno all'inizio per evitare il caricamento a zero
const now = new Date().getTime();
let timeLeft = countdownDate - now - (24 * 60 * 60 * 1000);

// Aggiorna ogni secondo
const countdownFunction = setInterval(() => {
    timeLeft -= 1000;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Aggiorna il DOM
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    } else {
        // Al termine del countdown
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("final-message").classList.remove("hidden");
    }
}, 1000);
