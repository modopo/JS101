let test = [1, 34, 23, 8, 95, 7]
let listWord = ['go', 'ahead', 'and', 'jump'];

test.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(test);

listWord.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } else {
        return 0;
    }
});

console.log(listWord);

test = [[1, 2], [3, 4]];

test = test.map(arr => {
    return console.log(arr[1])
});

console.log(test);