function repeater(input) {
    let result = input.split('').map(letter => {
        return letter + letter;
    })

    return result.join('');
}

console.log(repeater('testing'));