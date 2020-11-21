// Hides the arrows before the game starts
for(arrow of arrows.children) {
    arrow.style.visibility = "hidden";
}

function numberGuesser(guess) {
    nrOfTries--;
    if(nrOfTries === 0) {
        numberOfTries.innerHTML = `${nrOfTries}`;
        displayMessage.innerHTML = `<span class="loose">It seems that the luck has avoided you today <i class="fas fa-sad-cry"></i></span>`;
        triesLeft.innerHTML = `<span class="end">The secret number was <span class="loose">${randomNumber}</span></span>`;
        isGameOver();
    }else if(guess < randomNumber) {
        numberOfTries.innerHTML = `${nrOfTries}`;
        displayMessage.innerHTML = `The number is higher than this.`;
        triesLeft.innerHTML = `<span class="nrTries">${nrOfTries}</span> tries left.`;
    } else if (guess > randomNumber) {
        numberOfTries.innerHTML = `${nrOfTries}`;
        displayMessage.innerHTML = `The number is lower than this.`;
        triesLeft.innerHTML = `<span class="nrTries">${nrOfTries}</span> tries left.`;
    } else {
        numberOfTries.innerHTML = `${nrOfTries}`;
        displayMessage.innerHTML = `<span class="win">You have won the game <i class="fas fa-grin-stars"></i> Congratulations !</span>`;
        triesLeft.innerHTML = `<span class="end">The secret number was <span class="win">${randomNumber}</span></span>`;
        isGameOver();
    }
}

// Left Arrow Functionality
function lowerGuess() {
    if (guess === 0) {
        guess = Math.ceil(Math.random() * 50);
    }
    guess = Math.ceil(Math.random() * 50);
    numberGuesser(guess);
}

// Right Arrow Functionality
function greaterGuess() {
    if (guess === 0) {
        guess = Math.ceil((Math.random() * 50) + 50);
    }
    guess = Math.ceil((Math.random() * 50) + 50);
    numberGuesser(guess);
}

function isGameOver() {
    buttons.forEach(button => {
        button.style.visibility = "hidden";
    });
    
}

lower.addEventListener('click', lowerGuess);
greater.addEventListener('click', greaterGuess);

// Keyboard Functionality
window.addEventListener('keyup', (event) => {
    if (guess == randomNumber) {
        window.alert('Congratulations! Do you wanna play again ?');
        location.reload();
    } else if(nrOfTries > 0) {
        if(event.key === "ArrowRight") {
            greaterGuess();
        }
        if(event.key === "ArrowLeft") {
            lowerGuess();
        }
    } else {
        window.alert('Sorry! Wanna give it another shot ?');
        location.reload();
    }
});