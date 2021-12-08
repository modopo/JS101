function wordToDigitis(sentence) {
    const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    let result = sentence.split(' ').map(word => {
        if (NUM_WORDS.indexOf(word) >= 0) {
            return String(NUM_WORDS.indexOf(word));
        } else {
            return word;
        }
    }).join(' ');

    return result;
}

console.log(wordToDigitis('one two three four five six seven eight. thanks.'));