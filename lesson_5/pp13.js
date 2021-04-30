let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let result = [];

result = arr.sort((a, b) => {
    let oddA = a.filter(number => {
        return number % 2 === 1;
    }).reduce((sum, next) => {
        return sum + next;
    });

    let oddB = b.filter(number => {
        return number % 2 === 1;
    }).reduce((sum, next) => {
        return sum + next;
    });

    return oddA - oddB;
});

console.log(result);
