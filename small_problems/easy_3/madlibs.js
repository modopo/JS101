let readline = require("readline-sync");

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adj = readline.question('Enter an adjective: ');
let adv = readline.question('Enter an adverb: ');

let line1 = `Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`;
let line2 = `The ${adj} ${noun} ${verb}s ${adv} over the lazy dog`;
let line3 = `The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`;

console.log(line1);
console.log(line2);
console.log(line3);