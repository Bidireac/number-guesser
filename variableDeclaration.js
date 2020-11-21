// Random Number variables
const randomNumber = Math.ceil(Math.random() * 100);
const greater = document.querySelector('.greater');
const lower = document.querySelector('.lower');
const triesLeft = document.querySelector('.triesLeft');
const displayMessage = document.querySelector('.displayMessage');
const buttons = document.querySelectorAll('button');
const arrows = document.querySelector('.arrows');
// Dices roll variables
const roll = document.getElementById("roll");
const computerImg = document.querySelector('.computerImg');
const youImg = document.querySelector('.youImg');
const diceResult = document.querySelector('.showDiceResult');
const numberOfTries = document.querySelector('.numberOfTries');
const yourDice = document.querySelector('#you');
const computerDice = document.querySelector('#computer');


// The number of tries and the number guess variable
let nrOfTries = 0;
let guess = 0;