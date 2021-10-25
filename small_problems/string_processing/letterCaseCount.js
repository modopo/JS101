function letterCaseCount(string) {
    let arr = string.split('');
    let result = { lowercase: 0, uppercase: 0, neither: 0 };

    arr.forEach(char => {
        if (char >= 'a' && char <= 'z') {
            result['lowercase'] += 1;
        } else if (char >= 'A' && char <= 'Z') {
            result['uppercase'] += 1;
        } else {
            result['neither'] += 1;
        }
    })

    return result;
}

console.log(letterCaseCount('aBC'));