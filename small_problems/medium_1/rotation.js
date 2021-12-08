function rotateRightMostDigits(number, count) {
    let numberString = String(number);

    let beginning = numberString.slice(0, numberString.length - count);
    let end = rotateString(numberString.slice(numberString.length - count));

    return Number(beginning + end);
}

function rotateString(string) {
    return string.slice(1) + string[0];
}

console.log(rotateRightMostDigits(735291, 2));

function maxRotation(number) {
    let maxrotated = number;

    for (let count = String(number).length; count > 0; count--) {
        maxrotated = rotateRightMostDigits(maxrotated, count);
    }

    return maxrotated;
}

console.log(maxRotation(105));