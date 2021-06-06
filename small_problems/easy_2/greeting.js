function greetings(name, job) {
    let fullName = name.reduce((accum, currentVal) => {
        return accum + ' ' + currentVal;
    });

    console.log(`Hello, ${fullName}! Nice to have a ${job['title']} ${job['occupation']} around.`)
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });