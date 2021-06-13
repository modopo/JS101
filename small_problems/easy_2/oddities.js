function oddities(var1) {
    let result = [];

    if (var1.length === 0) {
        return result;
    }

    for (let index = 0; index <= var1.length; index += 2) {
        result.push(var1[index]);
    }

    return result;
}

console.log(oddities([2, 3, 4, 5, 6]));