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

console.log(substrings('abcd'));

