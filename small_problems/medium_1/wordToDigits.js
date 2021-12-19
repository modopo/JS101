function wordToDigitis(sentence) {
    const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    NUM_WORDS.forEach(word => {
        let regex = RegExp(word, 'g');
        sentence = sentence.replace(regex, NUM_WORDS.indexOf(word))
    });

    return sentence;
}

console.log(wordToDigitis('one two three four five six seven eight. thanks.'));