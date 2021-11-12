function staggerCase(sentence) {
    let isCap = true;

    return sentence.split('').map(char => {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
            if (isCap) {
                isCap = false;
                return char.toUpperCase();
            } else {
                isCap = true;
                return char.toLowerCase();
            }
        } else {
            return char;
        }
    }).join('')
}

console.log(staggerCase('this is a test'));
console.log(staggerCase('ignore 77 the 4444 numbers'));