let readline = require("readline-sync");

function numberIntake() {
    let collection = []
    collection.push(readline.question("Enter the 1st number: "));
    collection.push(readline.question("Enter the 2nd number: "));
    collection.push(readline.question("Enter the 3rd number: "));
    collection.push(readline.question("Enter the 4th number: "));
    collection.push(readline.question("Enter the 5th number: "));
    collection.push(readline.question("Enter the last number: "));
    console.log("\n");

    return collection;
}

function search(arr) {
    if (arr.slice(0, 5).includes(arr[5])) {
        console.log(`The number ${arr[5]} appears in ${String(arr.slice(0, 5))}.`);
    } else {
        console.log(`The number ${arr[5]} does not appear in ${String(arr.slice(0, 5))}.`)
    }
}

search(numberIntake());