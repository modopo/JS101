function doubleNumbers(numbers) {
    let counter = 0;

    while (counter < numbers.length) {
        numbers[counter] = numbers[counter] * 2
        counter += 1;
    }

    return numbers;
}

let test = [1, 2, 3, 4, 5];
doubleNumbers(test);

console.log(test);

function doubleOddIndex(numbers) {
    let counter = 0;

    while (counter < numbers.length) {
        if (counter % 2 === 1) {
            numbers[counter] = numbers[counter] * 2;
        }

        counter += 1;
    }

    return numbers;
}

test = [1, 2, 3, 4, 5];
doubleOddIndex(test);

console.log(test);

function multiply(arr, multiplier) {
    let result = [];

    for (let counter = 0; counter < arr.length; counter++) {
        result.push(arr[counter] * multiplier)
    }

    return result;
}

test = [1, 2, 3, 4, 5];
let result = multiply(test, 5);

console.log(test);
console.log(result);