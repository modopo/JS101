const readline = require('readline-sync');
const MESSAGE = require('./calculator_messages.json');

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGE['welcome']);

while (true) {

    prompt(MESSAGE['firstNumber']);
    let number1 = readline.question();

    while (invalidNumber(number1)) {
        prompt(MESSAGE['notValidNumber']);
        number1 = readline.question();
    }

    prompt(MESSAGE['secondNumber']);
    let number2 = readline.question();

    while (invalidNumber(number2)) {
        prompt(MESSAGE['notValidNumber']);
        number2 = readline.question();
    }

    prompt(MESSAGE['operations']);
    let operation = readline.question();

    while (!['1', '2', '3', '4'].includes(operation)) {
        prompt(MESSAGE['notValidOperator'])
        operation = readline.question();
    }

    let output;
    switch (operation) {
        case '1':
            output = Number(number1) + Number(number2);
            break;
        case '2':
            output = Number(number1) - Number(number2);
            break;
        case '3':
            output = Number(number1) * Number(number2);
            break;
        case '4':
            output = Number(number1) / Number(number2);
            break;
    }

    prompt(`The result is: ${output}`);
    prompt(MESSAGE['rerun']);
    let rerun = readline.question();
    
    if (rerun[0].toLowerCase() === 'n') {
        break;
    }
}