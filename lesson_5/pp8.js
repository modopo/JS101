let obj = {
    first: ['the', 'quick'],
    second: ['brown', 'fox'],
    third: ['jumped'],
    fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(entry => {
    entry.forEach(word => {
        word.split('').forEach(char => {
            if ('aeiou'.includes(char)) {
                console.log(char);
            }
        });
    });
});