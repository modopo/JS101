function randomInt(max, min) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function ageTeddy(max, min) {
    console.log(`Teddy is ${randomInt(max, min)} years old!`);
}

ageTeddy(120, 20);