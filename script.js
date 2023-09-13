// Calculate the time remaining until October 13 of the current year
const now = new Date();
const targetDate = new Date(now.getFullYear(), 9, 13); // Month is zero-based (9 for October)
const timeRemaining = targetDate - now;

// Update the countdown timer every second
function updateCountdown() {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Animate the plane's position here based on the timeRemaining value
    // You may need to use CSS transitions or JavaScript animation libraries
}

// Update the countdown initially
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
