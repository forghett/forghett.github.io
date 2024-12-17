// Funzione per creare un fiocco di neve
function createSnowflake() {
  const flake = document.createElement('div');
  flake.classList.add('flake');
  flake.classList.add(`shape${Math.floor(Math.random() * 6) + 1}`); // Assegna una forma random
  flake.style.left = `${Math.random() * 100}%`; // Posizione random
  flake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durata animazione random
  flake.style.animationDelay = `${Math.random() * 3}s`; // Ritardo animazione random
  document.querySelector('.snow').appendChild(flake);
}

// Crea 50 fiocchi di neve
for (let i = 0; i < 50; i++) {
  createSnowflake();
}

// Funzione per creare un motivo rosso random
function createRandomMotif() {
  const motif = document.createElement('div');
  motif.classList.add('red-motif');
  motif.style.left = `${Math.random() * 100}%`;
  motif.style.top = `${Math.random() * 100}%`;
  motif.style.animationDuration = `${Math.random() * 8 + 7}s`; // Durata animazione variabile
  motif.style.animationDelay = `${Math.random() * 5}s`; // Ritardo animazione random
  document.body.appendChild(motif);
}

// Crea 30 motivi rossi casuali
for (let i = 0; i < 30; i++) {
  createRandomMotif();
}

// Countdown e logica per il pulsante
const countdownElement = document.getElementById('countdown');
const showImageBtn = document.getElementById('showImageBtn');
const momyImage = document.getElementById('momyImage');

// Calcolo del tempo rimanente fino alla mezzanotte del 24 dicembre
const targetDate = new Date('December 25, 2024 00:00:00').getTime();

// Funzione di aggiornamento del countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calcola giorni, ore, minuti, secondi
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    countdownElement.innerHTML = "Auguriiiiiiiiiii :) ";
    showImageBtn.classList.remove('hidden');
  }
}

// Funzione per mostrare l'immagine dopo il click del bottone
showImageBtn.addEventListener('click', () => {
  momyImage.classList.remove('hidden');
});

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);
