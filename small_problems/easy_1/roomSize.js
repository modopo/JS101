const readline = require('readline-sync');
const SQMETER_TO_SQFEET = 10.7639;

console.log("Pick to calculate in meters or in feet:");
let unit = readline.prompt();

console.log("Enter the length of the room:");
let length = readline.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room:");
let width = readline.prompt();
width = parseInt(width, 10);

let area = parseInt(length * width).toFixed(2);

if (unit === 'meters') {
  console.log(`The are of the room is ${area} square meters (${(area * SQMETER_TO_SQFEET).toFixed(2)} square feet).`);
} else if (unit === 'feet') {
  console.log(`The area of the room is ${area} square feet (${(area / SQMETER_TO_SQFEET).toFixed(2)})`);
} else {
  console.log("Unit not recognized");
}