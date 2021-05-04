const readline = require('readline-sync');
const BLANK_SQUARE = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(message) {
    console.log(`=> ${message}`);
}

function displayBoard(board) {
    console.clear();

    console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

    console.log('');
    console.log('     |     |');
    console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
    console.log('     |     |');
    console.log('');
};

function initializeBoard() {
    let board = {};

    for (let square = 1; square <= 9; square++) {
        board[String(square)] = BLANK_SQUARE;
    }

    return board;
}

function emptySquares(board) {
    return Object.keys(board).filter(key => {
        return board[key] === BLANK_SQUARE;
    })
}

function joinOr(arr, delimiter = ', ', conj = 'or') {
    if (arr.length === 2) {
        return arr.join(` ${conj} `)
    } else if (arr.length > 2) {
        let front = arr.slice(0, arr.length - 1).join(delimiter)
        let end = arr.slice(-1)

        return front.concat(` ${conj} `, end);
    }

    return arr.join(conj);
}

function playerChoosesSquare(board) {
    let square;

    while (true) {
        prompt(`Choose a square (${joinOr(emptySquares(board))}):`)
        square = readline.question().trim();

        if (emptySquares(board).includes(square)) break;

        prompt("Sorry, that's an invalid input.")
    }

    board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
    return emptySquares(board).length === 0;
}

function someoneWon(board) {
    return !!detectWinner(board);
}

function detectWinner(board) {
    let winningLines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
        [1, 5, 9], [3, 5, 7]
    ]

    for (let line = 0; line < winningLines.length; line++) {
        let [sq1, sq2, sq3] = winningLines[line]
        if (
            board[sq1] === PLAYER_MARKER &&
            board[sq2] === PLAYER_MARKER &&
            board[sq3] === PLAYER_MARKER
        ) {
            return 'Player'
        } else if (
            board[sq1] === COMPUTER_MARKER &&
            board[sq2] === COMPUTER_MARKER &&
            board[sq3] === COMPUTER_MARKER
        ) {
            return 'Computer';
        }
    }

    return null;
}

while (true) {
    let board = initializeBoard();

    while (true) {
        displayBoard(board);
        
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
        prompt(`${detectWinner(board)} won!`);
    } else {
        prompt("It's a tie!");
    }

    prompt("Play again? (y/n)");
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;
}

prompt("Thanks for playing!")