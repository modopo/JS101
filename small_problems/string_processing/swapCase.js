function swapCase(string) {
    return string.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        } else {
            return char;
        }
    }).join('');
}

console.log(swapCase('this Is a TEST'));