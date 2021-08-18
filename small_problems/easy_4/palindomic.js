function isPalindromicNumber(number) {
    number = String(number);

    return number === number.split('').reverse().join('');
}

console.log(isPalindromicNumber(12331));