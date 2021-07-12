function cleanup(input) {
    let result = '';
    let check = '';

    for (let index = 0; index < input.length; index++) {
        check = input[index];

        if (isLegalChar(check)) {
            result += check;
        } else if (result[result.length - 1] !== ' ') {
            result += ' ';
        }
    }

    return result;
}

function isLegalChar(char) {
    return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
}

console.log(cleanup("---what's my )#$ line234?"));