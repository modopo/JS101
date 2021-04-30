function generateUUID() {
    let chars = 'abcdef'.split('').concat([0,1,2,3,4,5,6,7,8,9]);
    let format = [8,4,4,4,12]

    let uuid = '';

    format.forEach(slots => {
        for(let index = 0; index < slots; index++) {
            let randomChar = Math.floor(Math.random() * chars.length);
            uuid += chars[randomChar];
        }

        if (slots !== 12) {
            uuid += '-'
        }
    });

    return uuid;
}

console.log(generateUUID());