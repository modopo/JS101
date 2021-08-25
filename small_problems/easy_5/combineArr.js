function union(arr1, arr2) {
    let result = [];

    copyNoneDupe(result, arr1);
    copyNoneDupe(result, arr2);

    return result;
}

function copyNoneDupe(result, arr) {
    arr.forEach(elem => {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    });
}

console.log(union([1, 3, 5, 5], [3, 3, 3, 5, 5, 6, 6, 9, 9, 9]));