function featured(number) {
    const MAX_NUMBER = 9876543201;
    let featured = nextSevenOdd(number);

    do {
        if (unique(featured)) {
            return featured;
        } else {
            featured += 14;
        }
    } while (featured <= MAX_NUMBER)

    return 'There is no possible number that fullfills those requirements.'
}

function nextSevenOdd(number) {
    do {
        number += 1;
    } while (number % 2 === 0 || number % 7 !== 0);

    return number;
}

function unique(number) {
    let digits = String(number).split('');
    let seen = {};

    for(let index = 0; index < digits.length; index++) {
        if (seen[digits[index]]) {
            return false;
        }

        seen[digits[index]] = true;
    }

    return true;
}

console.log(featured(211111));