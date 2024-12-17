// Imposta la data del countdown: mezzanotte tra 24 e 25 dicembre
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

// Seleziona gli elementi DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownContainer = document.getElementById("countdown");
const finalMessage = document.getElementById("final-message");

// Nasconde il messaggio inizialmente
finalMessage.style.display = "none";

// Funzione per aggiornare il countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.innerText = days.toString().padStart(2, '0');
        hoursElement.innerText = hours.toString().padStart(2, '0');
        minutesElement.innerText = minutes.toString().padStart(2, '0');
        secondsElement.innerText = seconds.toString().padStart(2, '0');
    } else {
        clearInterval(interval);
        countdownContainer.style.display = "none";
        finalMessage.style.display = "block";
    }
}

// Avvia il countdown
updateCountdown();
const interval = setInterval(updateCountdown, 1000);
