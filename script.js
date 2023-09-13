document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2023-10-13").getTime();
    const countdownElements = {
        days: document.getElementById("countdown-days"),
        hours: document.getElementById("countdown-hours"),
        minutes: document.getElementById("countdown-minutes"),
        seconds: document.getElementById("countdown-seconds")
    };

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            Object.values(countdownElements).forEach(element => {
                element.innerHTML = "Event has arrived!";
            });
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElements.days.innerHTML = days;
            countdownElements.hours.innerHTML = hours;
            countdownElements.minutes.innerHTML = minutes;
            countdownElements.seconds.innerHTML = seconds;
        }
    }

    // Initial countdown update
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
