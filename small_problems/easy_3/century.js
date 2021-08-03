function century(input) {
    let century = Math.floor(input / 100) + 1

    if (input % 100 === 0) {
        century -= 1;
    }

    return String(century) + centurySuffix(century);
}

function centurySuffix(century) {
    if (exceptionTh(century % 100)) {
        return 'th';
    }

    let lastDigit = century % 10;

    switch (lastDigit) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function exceptionTh(lastTwo) {
    return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(101));
console.log(century(201));