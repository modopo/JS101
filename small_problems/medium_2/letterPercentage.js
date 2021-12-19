function letterPercentages(input) {
    let result = {};
    let count = [0, 0, 0];

    input.split('').forEach(char => {
        if (char >= 'a' && char <= 'z') {
            count[0] += 1;
        } else if (char >= 'A' && char <= 'Z') {
            count[1] += 1;
        } else {
            count[2] += 1;
        }
    });

    let sum = count.reduce((prev, current) => {
        return prev + current;
    });

    result.lowercase = ((count[0] / sum) * 100).toFixed(2);
    result.upppercase = ((count[1] / sum) * 100).toFixed(2);
    result.neither = ((count[2] / sum) * 100).toFixed(2);

    return result;

}

console.log(letterPercentages('abCdef 123'));