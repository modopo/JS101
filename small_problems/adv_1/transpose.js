const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
];

function transpose(arr) {
    let result = [[], [], []];

    for (let outer = 0; outer < arr.length; outer++) {
        for (let inner = 0; inner < arr.length; inner++) {
            result[inner][outer] = (arr[outer][inner])
        }
    }

    return result;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);