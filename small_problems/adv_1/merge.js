function merge(arr1, arr2) {
    let result = [];
    let copy1 = arr1.slice();
    let copy2 = arr2.slice();

    while (copy1.length > 0 && copy2.length > 0) {
        if (copy1[0] <= copy2[0]) {
            result.push(copy1.shift());
        } else {
            result.push(copy2.shift());
        }
    }

    if (copy1.length === 0) {
        return result.concat(copy2);
    } else {
        return result.concat(copy1);
    }
}

console.log(merge([1, 1, 9], [2, 6, 8]));