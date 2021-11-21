function rotateArray(array) {
    if (!Array.isArray(array)) {
        return undefined;
    }

    if (array.length === 0) {
        return [];
    }

    return array.slice(1).concat(array[0]);
}

function rotateRightMostDigits(number, count) {
    let numberString = String(number);

    let beginning = numberString.slice(0, numberString.length - count);
    let end = rotateString(numberString.slice(numberString.length - count));

    return Number(beginning + end);
}

function rotateString(string) {
    return string.slice(1) + string[0];
}

console.log(rotateRightMostDigits(12345, 3));