function countCarOccurences(list) {
    let result = {};

    list.forEach(item => {
        if (result[item] === undefined) {
            result[item] = 1;
        } else {
            result[item] += 1;
        }
    })

    Object.entries(result).forEach(entry => {
        console.log(`${entry[0]} => ${entry[1]}`)
    });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
    'motorcycle', 'motorcycle', 'car', 'truck'];

countCarOccurences(vehicles);