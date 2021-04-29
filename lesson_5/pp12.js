let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let result = arr.map(entry => {
    return entry.filter(value => {
        return value % 3 === 0;
    })
});

console.log(result);
console.log(arr);