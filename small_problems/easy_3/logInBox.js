function logInBox(input) {
    let line = `+${'-'.repeat(input.length + 2)}+`
    let emptyLine = `|${' '.repeat(input.length + 2)}|`

    console.log(line);
    console.log(emptyLine);
    console.log(`| ${input} |`);
    console.log(emptyLine);
    console.log(line);
}

logInBox('this is a test.');