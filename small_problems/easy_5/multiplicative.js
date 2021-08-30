function multiplicativeAverage(arr) {
    let product = arr.reduce((accum, currentVal) => {
        return accum * currentVal;
    });

    return (product / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));