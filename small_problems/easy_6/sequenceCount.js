function sequence(count, start) {
    let result = [];

    for (let index = 0; index < count; index++) {
        result.push(start * index);
    }

    return result;
}

console.log(sequence(5, 1));
console.log(sequence(0, 100));
console.log(sequence(4, -7));
console.log(sequence(3, 0));