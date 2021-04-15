let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
};

function selectFruit(produceObject) {
    let fruits = {};
    let produceKeys = Object.keys(produceObject);

    for (let counter = 0; counter < produceKeys.length; counter++) {
        let currentKey = produceKeys[counter];
        let currentValue = produceObject[currentKey];

        if  (currentValue === 'Fruit') {
            fruits[currentKey] = currentValue;
        }
    }

    return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }