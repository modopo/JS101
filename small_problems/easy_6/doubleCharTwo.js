function doubleConsonants(string) {
    let arr = string.split('');

    let result = arr.map(letter => {
        if (('AEIOUaeiou').includes(letter) || (letter.toLowerCase() < 'a')) {
            return letter;
        } else {
            return letter + letter;
        }
    })

    return result.join('');
}

console.log(doubleConsonants('July 4th'));