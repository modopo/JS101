let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let result = [];

result = arr.map(obj => {
    let newArr = {}

    for (let key in obj) {
        newArr[key] = obj[key] + 1;
    }

    for (let key in obj) {
        console.log(key);
    }
    
    return newArr;
});

console.log(result);

