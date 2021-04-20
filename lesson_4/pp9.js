let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
};

let arrAges = Object.values(ages);
let sumOfAges = 0; 

arrAges.forEach(age => {
    sumOfAges += age;
});

console.log(sumOfAges);