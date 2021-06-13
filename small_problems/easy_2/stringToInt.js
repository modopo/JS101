function stringToInteger(input) {
    const INTS = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '0': 0
    }

    let integerSwap = input.split('').map(char => {
        return INTS[char];
    });

    let value = 0;

    integerSwap.forEach(digit => {
        value = (value * 10) + digit;
    })

    return value;
}

console.log(stringToInteger("4321") == 4321);
console.log(stringToInteger('570') === 570);