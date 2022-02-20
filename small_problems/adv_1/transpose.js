const matrix = [
    [1, 2, 3],
    [4, 5, 5],
    [7, 8, 9]
];

function transpose(arr) {
    let result = [];
    for (let idx = 0; idx < arr[0].length; idx++) {
        result.push([]);
    }

    for (let outer = 0; outer < arr.length; outer++) {
        for (let inner = 0; inner < arr[outer].length; inner++) {
            result[inner].push(arr[outer][inner])
        }
    }

    return result;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);