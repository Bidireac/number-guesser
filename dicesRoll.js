// Decides how many tries the player gets
function diceRoll() {
    let you = yourRoll();
    let computer = computerRoll();
    if(you > computer) {
        yourDice.innerHTML = `<img class="youImg winner" src="dices/${you}.svg">`;
        computerDice.innerHTML = `<img class="computerImg looser" src="dices/${computer}.svg">`;
        numberOfTries.style.color = "#67b67f";
        nrOfTries = 30;
        diceResult.innerHTML = `
        <p>You won the first round <i class="fas fa-smile-wink"></i></p>
        <p>The number of tries you have left is:</p>
        `;
        numberOfTries.innerHTML = `${nrOfTries}`;
    } else if(you === computer) {
        diceRoll();
    } else {
        yourDice.innerHTML = `<img class="youImg looser" src="dices/${you}.svg">`;
        computerDice.innerHTML = `<img class="computerImg winner" src="dices/${computer}.svg">`;
        numberOfTries.style.color = "#f55358";
        nrOfTries = 15;
        diceResult.innerHTML = `
        <p>You lost the first round <i class="fas fa-sad-tear"></i></p>
        <p>The number of tries you have left is:</p>
        `;
        numberOfTries.innerHTML = `${nrOfTries}`;
    }
    roll.style.visibility = "hidden";
    for(arrow of arrows.children) {
        arrow.style.visibility = "visible";
    }
}

function yourRoll() {
    return random = Math.ceil(Math.random() * 6);
}

function computerRoll() {
    return random = Math.ceil(Math.random() * 6);
}

roll.addEventListener('click', diceRoll);