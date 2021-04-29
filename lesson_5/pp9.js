let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let result = [];

result = arr.map(subArray => {
    if (typeof subArray[0] === 'string') {
        return subArray.slice().sort();
    } else {
        return subArray.slice().sort((a, b) => {
            return a - b;
        });
    }
});

console.log(result);

result = arr.map(subArray => {
    if (typeof subArray[0] === 'string') {
        return subArray.slice().sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        })
    } else {
        return subArray.slice().sort((a, b) => {
            return b - a;
        });
    }
});

console.log(result);