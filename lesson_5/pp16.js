let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

function objectify(arg) {
    let obj = {};

    arg.forEach(subArr => {
        obj[subArr[0]] = subArr[1];
    })

    return obj;
}

console.log(objectify(arr));

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }