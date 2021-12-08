function minilang(commands) {
    let register = 0;
    let stack = [];

    commands.split(' ').forEach(token => {
        switch (token) {
            case 'ADD':
                register += stack.pop();
                break;
            case 'DIV':
                register = Math.floor(register / stack.pop());
                break;
            case 'MULT':
                register *= stack.pop();
                break;
            case 'REMAINDER':
                register = Math.floor(register % stack.pop());
                break;
            case 'SUB':
                register -= stack.pop();
                break;
            case 'PUSH':
                stack.push(register);
                break;
            case 'POP':
                register = stack.pop();
                break;
            case 'PRINT':
                console.log(register);
                break;
            default:
                register = Number(token);
        }
    });

    return register;
}

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');