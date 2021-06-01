const readline = require("readline-sync");

let number = Number(readline.question("Please enter a integer greater than 0: "));
let operation = readline.question("Enter \"s\" to compute the sume, or \"p\" to compute the product: ");

let result = 0;
if (operation === 's') {
  for (let index = 1; index <= number; index++) {
    result += index;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
} else if (operation === 'p') {
  result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  console.log(`The product of the integers between 1 and ${number} is ${result}`);
} else {
  console.log("Unknown operation.")
}

