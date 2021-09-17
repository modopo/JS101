function reverseNumber(number) {
    let stringNum = String(number).split('').reverse();

    let result = stringNum.reduce((previous, current) => {
        if (previous !== "0") {
            return previous + current;
        } else {
            return current;
        }
    })

    return result;
}

console.log(reverseNumber(12000));
console.log(reverseNumber(000));