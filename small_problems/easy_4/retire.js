let readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retirement = readline.question("At what age would you like to retire? ");
let date = new Date();
let year = date.getFullYear();

console.log(`It's ${Number(year)}. You will retire in ${Number(year) + Number(retirement)}.`);
console.log(`You have only ${Number(retirement) - Number(age)} years of work to go!`);
