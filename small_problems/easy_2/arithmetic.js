const readline = require('readline-sync');

let input1 = Number(readline.question("Enter the first number:\n"));
let input2 = Number(readline.question("Ender the second number:\n"));

console.log(`${input1} + ${input2} = ${input1 + input2}`);
console.log(`${input1} - ${input2} = ${input1 - input2}`);
console.log(`${input1} * ${input2} = ${input1 * input2}`);
console.log(`${input1} / ${input2} = ${input1 / input2}`);
console.log(`${input1} % ${input2} = ${input1 % input2}`);
console.log(`${input1} ** ${input2} = ${input1 ** input2}`);