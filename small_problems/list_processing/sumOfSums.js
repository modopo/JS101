function sumOfSums(array) {
    let result = 0;

    for (let index = 1; index <= array.length; index++) {
        result += array.slice(0, index).reduce((sum, number) => sum + number)
    }

    return result;
}

console.log(sumOfSums([1, 2, 3]));