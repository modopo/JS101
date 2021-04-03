const input = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const WINNING_VARIATIONS = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['rock', 'scissors'],
    lizard: ['paper', 'spock']
}

function prompt(message) {
    console.log(`=> ${message}`);
}

function checkPlayerWin(choice, computerChoice) {
    return WINNING_VARIATIONS[choice].includes(computerChoice);
}

function playerWins(choice, computerChoice) {
    if (checkPlayerWin(choice, computerChoice)) {
        prompt("You win!")
    } else if (choice === computerChoice) {
        prompt("It's a tie.")
    } else {
        prompt("Computer wins.")
    }
}

while (true) {
    prompt(`Choose one of the following: ${VALID_CHOICES.join(', ')}`);
    let choice = input.question();

    while (!VALID_CHOICES.includes(choice)) {
        prompt("That's not a valid choice.");
        choice = input.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    playerWins(choice, computerChoice);

    prompt("Do you want play again? (y/n)")
    let answer = input.question().toLocaleLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt("Please enter y or n");
        answer = input.question().toLocaleLowerCase();
    }

    if (answer[0] !== 'y')
        break;
}