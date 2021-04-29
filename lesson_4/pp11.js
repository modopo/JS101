let statement = "The Flintstones Rock";

function flatten(phrase) {
    let result = {};
    let arr = phrase.split('').filter(char => {
        return char !== ' ';
    });

    arr.forEach(letter => {
        if (result.hasOwnProperty(letter)) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
    });

    return result;
}

console.log(flatten(statement));