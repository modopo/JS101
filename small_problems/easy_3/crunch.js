function crunch(input) {
    let arr = input.split('');

    let result = '';

    result = arr.reduce((accum, current, index) => {
        if (input[index] !== input[index + 1]) {
            accum += current;
        }

        return accum;
    }, '');

    return result;
}

console.log(crunch('ddaaiillyy ddoouuubbbbbblle'));
console.log(crunch('a'));
console.log(crunch(''));