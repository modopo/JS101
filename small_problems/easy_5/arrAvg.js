function average(arr) {
    let sum = 0;

    arr.forEach(number => {
        sum += number;
    });

    return Math.floor(sum / arr.length);
}

function averageReduce(arr) {
    let length = arr.length;

    let sum = arr.reduce((prev, current) => {
        return prev + current;
    });

    return Math.floor(sum / length);
}

console.log(averageReduce([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));