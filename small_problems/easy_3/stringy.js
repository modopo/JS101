function stringy(input) {
    let result = '';
    let start = '1';

    for (let index = 0; index < input; index++) {
        result += start;

        if (start === '0') {
            start = '1';
        } else {
            start = '0';
        }
    }

    return result;
}

function stringyIndex(input) {
    let result = '';

    for (let index = 0; index < input; index++) {
        let number = (index % 2 === 0) ? 1 : 0;
        result += number;
    }

    return result;
}

console.log(stringyIndex(5));
console.log(stringy(5));