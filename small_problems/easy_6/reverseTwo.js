function reverseWords(string) {
    let result = string.split(' ').map(word => {
        if (word.length < 5) {
            return word.split('').reverse().join('');
        } else {
            return word;
        }
    })

    return result.join(' ');
}

console.log(reverseWords('hello world of launch school and walk around the block'));