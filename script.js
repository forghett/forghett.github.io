document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("2023-10-13").getTime();
    const countdownElements = {
        days: document.getElementById("countdown-days"),
        hours: document.getElementById("countdown-hours"),
        minutes: document.getElementById("countdown-minutes"),
        seconds: document.getElementById("countdown-seconds")
    };

    const erciImage = document.getElementById("erci");
    const colosseoImage = document.getElementById("colosseo");

    function updateCountdown() {
        const currentDate = new Date().getTime(); // Use the current date

        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            Object.values(countdownElements).forEach(element => {
                element.innerHTML = "Ciccio has arrived!";
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

            // Calculate the progress as a percentage
            const totalDuration = targetDate - new Date("2023-09-13").getTime();
            const progress = 100 - (timeRemaining / totalDuration) * 100;

            // Adjust the position of the "Erci" image based on the progress
            erciImage.style.left = progress + "%";

            // Calculate vertical movement based on the progress (adjust as needed)
            const verticalMovement = (100 - progress) * 2; // You can adjust the multiplier for the desired vertical movement
            
            // Adjust the position of the "Erci" image vertically
            erciImage.style.top = verticalMovement + "px";
        }
    }

    // Initial countdown update
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
