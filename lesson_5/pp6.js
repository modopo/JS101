let munsters = {
    herman: { age: 32, gender: 'male' },
    lily: { age: 30, gender: 'female' },
    grandpa: { age: 402, gender: 'male' },
    eddie: { age: 10, gender: 'male' },
    marilyn: { age: 23, gender: 'female' }
};

Object.entries(munsters).forEach(entry => {
    let name = entry[0];
    let age = entry[1]['age'];
    let gender = entry[1]['gender']

    console.log(`${name} is a ${age}-year-old ${gender}.`);
});