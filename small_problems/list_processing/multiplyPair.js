function multiplyAllPairs(arr1, arr2) {
    let result = [];

    arr1.forEach(number1 => {
        arr2.forEach(number2 => {
            result.push(number1 * number2)
        })
    })

    return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));