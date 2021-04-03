const input = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
    console.log(`=> ${message}`);
}

prompt(`Choose one of the following: ${VALID_CHOICES.join(', ')}`);
let choice = input.question();

while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = input.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}, computer chose ${computerChoice}`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You WIN!');
} else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer WINS!');
} else {
    prompt("It's a tie!");
}
