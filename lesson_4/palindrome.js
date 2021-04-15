function allSubstrings(str) {
    let result = [];
    let startingIndex = 0;

    while (startingIndex <= str.length - 2) {
        let minChar = 2;
        while (minChar <= str.length - startingIndex) {
            let substring = str.slice(startingIndex, startingIndex + minChar)
            result.push(substring);
            minChar += 1;
        }

        startingIndex += 1;
    }

    return result;
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function palindromSubstrings(str) {
    let result = [];
    let substringArr = allSubstrings(str);

    substringArr.forEach(substring => {
        if (isPalindrome(substring)) {
            result.push(substring);
        }
    });

    return result;
}

console.log(palindromSubstrings("abesal;dkfjiopqueijjbjbkasjkskkllldkjfjei"));