function swapName(name) {
    let arr = name.split(' ').reverse();

    return arr.join(', ');
}

console.log(swapName('Joe Roberts'));