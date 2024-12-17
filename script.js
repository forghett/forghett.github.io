// Imposta la data e l'ora del countdown: mezzanotte tra il 24 e il 25 dicembre
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

// Aggiorna il countdown ogni secondo
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    // Calcola giorni, ore, minuti e secondi
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Inserisce i valori nel DOM
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Mostra l'immagine al termine del countdown
    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("christmasImage").classList.remove("hidden");
    }
}, 1000);
