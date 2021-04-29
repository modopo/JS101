let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female' }
};

let totalAgeMale = 0;

Object.entries(munsters).forEach(person => {
    if (person[1]['gender'] === 'male') {
        totalAgeMale += person[1]['age']
    };
});

console.log(totalAgeMale);

totalAgeMale = 0;

Object.values(munsters).forEach(person => {
    if (person.gender === 'male') {
        totalAgeMale += person.age;
    }
});

console.log(totalAgeMale);

