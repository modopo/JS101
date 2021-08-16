function isPalindrome(input) {
    return input === input.split('').reverse().join('');
}

console.log(isPalindrome('madam'));