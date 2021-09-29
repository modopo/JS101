const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen']


function wordSort(num1, num2) {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
        return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
        return -1;
    } else {
        return 0;
    }
}

function alphabeticNumberSort(array) {
    return [...array].sort(wordSort);
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));