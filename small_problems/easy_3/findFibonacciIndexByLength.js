function findFibonacciIndexByLength(input) {
    let result;
    let first = 1n;
    let second = 1n;
    let count = 2n;

    do {
        result = first + second;
        count += 1n;
        first = second;
        second = result;
    } while (String(result).length < input);

    return count;
}

console.log(findFibonacciIndexByLength(10000n));