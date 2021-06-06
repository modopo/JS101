const readline = require('readline-sync');

let input = readline.question("What is your name? ");

if (input.includes("!")) {
    console.log(`HELLO ${input.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
    console.log(`Hello ${input}.`);
}