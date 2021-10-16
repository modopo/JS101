function leadingSubstrings(string) {
    let split = string.split('');
    let result = [];

    split.reduce((prev, current) => {
        result.push(prev + current)
        return prev + current;
    }, '');

    return result;

}

function substrings(string) {
    let result = [];

    for (let index = 0; index < string.length; index++) {
        let substring = string.substring(index);
        result = result.concat(leadingSubstrings(substring));
    }

    return result;
}

function isPalindrome(string) {
    return string.length > 1 && string == string.split('').reverse().join('')
}

function palindromes(string) {
    return substrings(string).filter(word => {
        return (isPalindrome(word))
    });
}

console.log(isPalindrome('aba'));
console.log(substrings('abcd'));

console.log(palindromes('madam'));

