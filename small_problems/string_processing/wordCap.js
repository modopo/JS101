function wordCap(sentence) {
    let arr = sentence.split(' ');

    return arr.map(word => {
        let wordArr = word.split('');
        wordArr[0] = wordArr[0].toUpperCase();
        return wordArr.join('');
    }).join(' ');
}

console.log(wordCap('this is a "quoted" word'));