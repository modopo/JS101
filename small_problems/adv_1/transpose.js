const matrix = [
<<<<<<< HEAD
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

=======
    [1, 5, 8, 5],
    [4, 7, 2, 0],
    [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

function transpose(arr) {
    let template = [];

    for (let idx = 0; idx < arr[0].length; idx++) {
        template.push([]);
    }

    for (let outer = 0; outer < arr[0].length; outer++) {
        for (let inner = 0; inner < arr.length; inner++) {
            template[outer].push(arr[inner][outer]);
        }
    }

    return template;
}

>>>>>>> main
console.log(newMatrix);