function swap(str) {
    let arr = str.split(' ');

    let result = arr.map(word => {
        return word.split('').reverse().join('');
    }).join(' ');

    return result;
}

console.log(swap('Oh what a wonderful day it s'));
console.log(swap('Abcde'));
console.log(swap('a'));