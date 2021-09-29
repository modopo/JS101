function leadingSubstrings(string) {
    let split = string.split('');
    let result = [];

    split.reduce((prev, current) => {
        result.push(prev + current)
        return prev + current;
    }, '');

    return result;

}

console.log(leadingSubstrings('abcd'));

