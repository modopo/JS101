const input = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

function numberCheck(number) {
    return number.trim() === '' ||
        Number(number) < 0 ||
        Number.isNaN(Number(number));
}

console.log("Welcome to the payment calculator");

while(true) {
    prompt("What is the loan amount?");
    
    let loanAmount = input.question();
    while (numberCheck(loanAmount)) {
        prompt("Enter a valid amount");
        loanAmount = input.question();
    }

    console.log("What's the Annual Percentage Rate in percentages?");
    
    let apr = input.question();
    while (numberCheck(apr)) {
        prompt("Enter a valid postive number");
        apr = input.question();
    }

    console.log("What's the loan duration in months?");

    let duration = input.question();
    while(numberCheck(duration)) {
        prompt("Enter a valid postive number");
        duration = input.question();
    }

    apr = Number(apr) / 100;
    let mpr = apr / 12;

    let monthlyPayment = Number(loanAmount) * (mpr / (1 - Math.pow((1 + mpr), (-Number(duration)))));

    prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

    prompt("Need another calculation? y or n");
    let answer = input.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n":');
        answer = input.question().toLowerCase();
    }

    if (answer[0] === 'n')
        break;
}

