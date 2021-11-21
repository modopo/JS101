function rotateArray(array) {
    if (!Array.isArray(array)) {
        return undefined;
    }

    if (array.length === 0) {
        return [];
    }

    return array.slice(1).concat(array[0]);
}

console.log(rotateArray([1,2,3,4]));
console.log(rotateArray(['a','b','c']));