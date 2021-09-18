function reverseSequence(string) {
    return string.split(' ').reverse().join(' ');
}

console.log(reverseSequence('Hello World, this is a test.'));