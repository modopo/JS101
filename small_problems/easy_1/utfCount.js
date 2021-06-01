function utf16Value(input) {
    let value = 0;

    input.split("").forEach(letter => {
        value = value + letter.charCodeAt(0);
    });

    return value;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));