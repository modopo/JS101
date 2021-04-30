let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let values = Object.values(obj);

values = values.map(entry => {
    if (entry.type === 'fruit') {
        return entry.colors.map(color => {
            return color.charAt(0).toUpperCase() + color.slice(1)
        });
    } else {
        return entry.size.toUpperCase();
    }
});

console.log(values);