//Question 1
let advice = "Few things in life are as important as house training your important pet dinosaur.";

function importantify(phrase) {
    return phrase.replaceAll('important', 'urgent');
}

console.log(importantify(advice));

//Question 2
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let reversed = []

numbers.forEach(num => {
    reversed.unshift(num);
})

console.log(reversed);

//Question 5
let consecNumber = [1, 2, 3, 4, 5]
consecNumber.splice(2, 1);
console.log(consecNumber);

//Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = flintstones.reduce((accum, element) => {
    return accum.concat(element);
}, []);

console.log(flintstones);

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flattened = [];

flintstones.forEach(element => {
    flattened = flattened.concat(element)
})

console.log(flattened);

//Question 7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let entriesFlint = Object.entries(flintstones);

let answer = entriesFlint.filter(pair => {
    return pair[0] === 'Barney'
});
    
console.log(answer.shift());

//Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1Count = statement1.split('').filter(char => {
    return char === 't';
}).length

console.log(statement1Count);
