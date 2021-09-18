function sequence(number) {
    let result = []

    for (let index = 1; index <= number; index++) {
        result.push(index);
    }

    return result;
}

console.log(sequence(10));