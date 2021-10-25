function removeVowels(array) {
    return array.map(word => {
        return deleteVowels(word);
    })
};

function deleteVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    string = string.split('');

    return string.map(char => {
        if (VOWELS.indexOf(char) >= 0) {
            return "";
        } else {
            return char;
        };
    }).join('');
}

console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));