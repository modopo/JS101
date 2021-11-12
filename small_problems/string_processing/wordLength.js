function wordLengths(sentence) {
    if (arguments.length === 0 || sentence.length === 0) {
        return [];
    }

    let arr = sentence.split(' ');

    return arr.map(word => {
        return word.concat(' ', String(word.length));
    });

}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths(''));