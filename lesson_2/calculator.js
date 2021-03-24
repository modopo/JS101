//prompt for first number
//prompt for second number
//prompt for operatorion to perform
//perform operation with first and second number
//print result in terminal

const input = require('readline-sync');

console.log("Welcome to Calculator");
let number1 = Number(input.question("What's the first number? "));
let number2 = Number(input.question("What's the second number? "));

let operation = input.question("What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n");

let output;
switch (operation) {
    case "1" : 
        output = number1 + number2;
        break;
    case "2" : 
        output = number1 - number2;
        break;
    case "3" : 
        output = number1 * number2;
        break;
    case "4" : 
        output = number1 / number2;
        break;
    default : console.log("Invalid operation input."); 
}

console.log(`The numbers are ${number1} and ${number2}.`);
console.log(`The result is: ${output}`);