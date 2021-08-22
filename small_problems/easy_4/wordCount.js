function wordSizes(str) {
    let result = {}
    if (str.length === 0) {
        return result;
    }

    let arr = str.split(' ');

    arr.forEach(elem => {
        let scrubbed = lettersOnly(elem.toLowerCase())

        if (result.hasOwnProperty(String(scrubbed.length))) {
            result[String(scrubbed.length)] += 1;
        } else {
            result[String(scrubbed.length)] = 1;
        }
    })

    return result;
}

function lettersOnly(str) {
    let result = '';
    let arr = str.split('');

    arr.forEach(char => {
        if (char >= 'a' && char <= 'z') {
            result += char;
        }
    })

    return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'))
console.log(wordSizes(''));