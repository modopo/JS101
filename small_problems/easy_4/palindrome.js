function isRealPlanidrom(input) {
    input = enforceAlphanumericOnly(input.toLowerCase());
    return isPalindrome(input);
}

function isPalindrome(input) {
    return input === input.split('').reverse().join('');
}

function enforceAlphanumericOnly(string) {
    let arr = string.split('');
    let result = '';

    arr.forEach(char => {
        if (isAlphanumeric(char)) {
            result += char;
        }
    });

    return result;
}

function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') || (char >= 0 && char <= 9)
}

console.log(isRealPlanidrom('Mad|am'));
console.log(isRealPlanidrom('123a321'));