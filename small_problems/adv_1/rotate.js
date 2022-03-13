function rotate(arr) {
    let result = [];

    for (let idx = 0; idx < arr[0].length; idx++) {
        result.push([]);
    }

    for (let outer = 0; outer < arr[0].length; outer++) {
        for (let inner = arr.length - 1; inner >= 0; inner--) {
            result[outer].push(arr[inner][outer]);
        }
    }

    return result;
}

let matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
];

let matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8],
];

let newMatrix1 = rotate(matrix1);
let newMatrix2 = rotate(matrix2);
let newMatrix3 = rotate(rotate(rotate(rotate(matrix2))));

console.log(newMatrix1);
console.log(newMatrix2);
console.log(newMatrix3);