function rotateArray(array) {
    if (!Array.isArray(array))
        return undefined;

    if (array.length === 0) {
        return [];
    }

    return array.slice(1).concat(array[0]);
}