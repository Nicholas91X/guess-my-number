'use strict';

// ----- VERSIONE CORRETTA -----

// --- INIZIALIZZO NUMERO SEGRETO E LA SUA FUNZIONE ---
let secretNumber = 0;

function callNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

// --- DEFINISCO LO SCORE ---
let score = 20;

// --- DEFINISCO HIGHSCORE ---
let highscore = 0;

// --- FUNZIONE DISPLAYMESSAGE ---
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// --- LOGICA REFRESH ---
document.querySelector('.again').addEventListener('click', function () {
  callNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = 0;
});

// --- DEFINISCO IL NUMERO SEGRETO ---
callNumber();

// -- CONTROLLO GENERATORE NUMERI --
console.log(secretNumber);

// --- SELEZIONO CHECK BUTTON CON EVENT LISTENER ---
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // -- GESTISCO ASSENZA DI INPUT --
  if (!guess) {
    displayMessage('Nessun Numero 🚫');
  }
  //   -- GESTISCO LOGICA --
  else if (guess === secretNumber) {
    displayMessage('Hai indovinato! 🏆');

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // -- MANIPOLO CSS --
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  //   --- LOGICA SECRETNUMBER !== INPUT ---
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Troppo alto..ritenta ⬇'
          : 'Troppo basso..ritenta ⬆'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Oooops..Hai perso! 😥');

      document.querySelector('.score').textContent = 0;
    }
  }
});
