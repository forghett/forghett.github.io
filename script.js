document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2023-10-13").getTime();
    const countdownContainer = document.getElementById("countdown");
    const countdownDays = document.getElementById("countdown-days");
    const countdownHours = document.getElementById("countdown-hours");
    const countdownMinutes = document.getElementById("countdown-minutes");
    const countdownSeconds = document.getElementById("countdown-seconds");

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            countdownContainer.innerHTML = "Event has arrived!";
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownDays.innerHTML = days;
            countdownHours.innerHTML = hours;
            countdownMinutes.innerHTML = minutes;
            countdownSeconds.innerHTML = seconds;
        }
    }

    // Initial countdown update
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
