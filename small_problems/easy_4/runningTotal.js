function runningTotal(arr) {
    let result = [];
    let temp = 0;

    for (let index = 0; index < arr.length; index++) {
        result.push((temp + arr[index]));
        temp = result[index];
    }

    return result;
}

function runningMap(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let sum = 0;
    return arr.map(elem => {
        sum += elem;
        return sum;
    })

}

console.log(runningMap([2, 5, 13]));

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([2]));
console.log(runningTotal([]));