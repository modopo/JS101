function wordSizes(str) {
    let arr = str.split(' ');
    let result = {}

    if (str.length === 0) {
        return result;
    }

    arr.forEach(elem => {
        if (Object.keys(result).includes(String(elem.length))) {
            result[String(elem.length)] += 1;
        } else {
            result[String(elem.length)] = 1;
        }
    })

    return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes(''));