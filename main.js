// //REFACTORED VERSION:
// const characters = document.querySelectorAll('.character-box');
// const charactersBattle = document.querySelectorAll('.player-battle');

// characters.forEach(character => {
//   character.addEventListener('click', switchFighters);
// });

// function switchFighters(e) {
//   removeActiveClasses();
//   charactersBattle.forEach(battle => {
//     battle.classList.add('active');
//   });
// }

// function removeActiveClasses() {
//   charactersBattle.forEach(battle => {
//     battle.classList.remove('active');
//   });
// }

//CURRENT VERSION:
document.querySelector('#luffy').addEventListener('click', luffyBattle);
document.querySelector('#zoro').addEventListener('click', zoroBattle);
document.querySelector('#ace').addEventListener('click', aceBattle);
document.querySelector('#shanks').addEventListener('click', shanksBattle);

const luffy = document.querySelector('.luffy-battle');
const zoro = document.querySelector('.zoro-battle');
const ace = document.querySelector('.ace-battle');
const shanks = document.querySelector('.shanks-battle');

function luffyBattle() {
  luffy.classList.toggle('hidden');
  zoro.classList.add('hidden');
  ace.classList.add('hidden');
  shanks.classList.add('hidden');
}

function zoroBattle() {
  zoro.classList.toggle('hidden');
  luffy.classList.add('hidden');
  ace.classList.add('hidden');
  shanks.classList.add('hidden');
}

function aceBattle() {
  ace.classList.toggle('hidden');
  luffy.classList.add('hidden');
  zoro.classList.add('hidden');
  shanks.classList.add('hidden');
}

function shanksBattle() {
  shanks.classList.toggle('hidden');
  luffy.classList.add('hidden');
  zoro.classList.add('hidden');
  ace.classList.add('hidden');
}

//ROCK PAPER SCISSORS LOGIC:
const userChoiceDisplay = document.querySelector('#user-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const resultDisplay = document.querySelector('#result-display');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const possibleChoices = document.querySelectorAll('.rps-button');
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(choice => {
  choice.addEventListener('click', e => {
    userChoice = e.target.id;

    if (userChoice === 'rock') {
      userChoiceDisplay.innerText = '✊';
    } else if (userChoice === 'paper') {
      userChoiceDisplay.innerText = '✋';
    } else if (userChoice === 'scissors') {
      userChoiceDisplay.innerText = '✌️';
    }

    generateComputerChoice();
    displayResult();
    matchOver();
  });
});

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 0) {
    computerChoice = 'scissors';
    computerChoiceDisplay.innerText = '✌️';
  } else if (randomNumber === 1) {
    computerChoice = 'rock';
    computerChoiceDisplay.innerText = '✊';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
    computerChoiceDisplay.innerText = '✋';
  }
  console.log(computerChoice);
}

function displayResult() {
  if (userChoice === computerChoice) {
    resultDisplay.innerText = 'its a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock')
  ) {
    resultDisplay.innerText = 'you lose!';
    computerScore++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDisplay.innerHTML = 'you win!';
    userScore++;
  }

  computerScoreDisplay.innerHTML = computerScore;
  userScoreDisplay.innerHTML = userScore;
  resultDisplay.style.color = 'aquamarine';
}

function matchOver() {
  const winnerMessage = document.querySelector('#defeat-message');
  if (userScore === 5) {
    winnerMessage.innerText = 'you defeated kaido!';
    displayMessage();
  } else if (computerScore === 5) {
    winnerMessage.innerText = 'kaido defeated you!';
    displayMessage();
  }
}

function displayMessage() {
  const popUpMessage = document.querySelector('.pop-up');
  popUpMessage.classList.remove('hidden');

  const playAgainButton = document.querySelector('#play-again');
  playAgainButton.addEventListener('click', resetGame);

  function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerText = 'choose your attack:';
    resultDisplay.style.color = '#fff';
    popUpMessage.classList.add('hidden');
  }
}
