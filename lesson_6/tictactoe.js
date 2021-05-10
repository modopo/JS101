const readline = require('readline-sync');
const BLANK_SQUARE = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN_MATCH = 5;
const NO_RISK_DEFAULT_SQUARE = 5;
const PLAYERS = ['Player', 'Computer', 'Random']
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]

function prompt(message) {
    console.log(`=> ${message}`);
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

function displayBoard(board) {
    console.clear();

    console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

    console.log('');
    console.log('1    |2    |3');
    console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('4    |5    |6');
    console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('7    |8    |9');
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

function chooseWhoStarts() {
    prompt(`Please choose who starts: ${PLAYERS[0]}, ${PLAYERS[1]} or ${PLAYERS[2]} (p/c/r)`);

    let answer = readline.question().toLowerCase()[0];
    while (answer != 'p' && answer != 'c' && answer != 'r') {
        prompt("Sorry, that's an invalid input. Please choose 'p', 'c' or 'r'");
        answer = readline.question().toLowerCase()[0];
    }

    if (answer === 'r') {
        let randomIndex = Math.floor(Math.random() * (PLAYERS.length - 1));
        return PLAYERS[randomIndex];
    } else if (answer === 'c') {
        return PLAYERS[1];
    } else if (answer === 'p') {
        return PLAYERS[0];
    }
}

function alternatePlayer(player) {
    if (player === PLAYERS[0]) {
        return PLAYERS[1];
    } else if (player === PLAYERS[1]) {
        return PLAYERS[0];
    }
}

function emptySquares(board) {
    return Object.keys(board).filter(key => {
        return board[key] === BLANK_SQUARE;
    })
}

function chooseSquare(board, player) {
    if (player === 'Player') {
        playerChoosesSquare(board);
    } else {
        computerChoosesSquare(board);
    }
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
    let square;

    let offense = findAtRiskSquares(board, COMPUTER_MARKER);
    let defense = findAtRiskSquares(board, PLAYER_MARKER);
    let middleDefault = defaultToFive(defense, offense, board);

    //short circuit
    square = offense || defense || middleDefault;

    if (!square) {
        let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
        square = emptySquares(board)[randomIndex];
    }

    board[square] = COMPUTER_MARKER;
}

function findAtRiskSquares(board, mark) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
        let lineToCheck = WINNING_LINES[index];
        let markersInLline = lineToCheck.map(square => board[square]);
        if (markersInLline.filter(marker => marker === mark).length === 2) {
            let unusedSpace = lineToCheck.find(square => board[square] === ' ')
            if (unusedSpace != undefined) {
                return unusedSpace;
            }
        }
    }

    return null;
}

function defaultToFive(defense, offense, board) {
    if (!offense || !defense) {
        if (board[NO_RISK_DEFAULT_SQUARE] === BLANK_SQUARE) {
            return NO_RISK_DEFAULT_SQUARE
        }
    }

    return null;
}

function boardFull(board) {
    return emptySquares(board).length === 0;
}

function someoneWon(board) {
    return !!detectWinner(board);
}

function detectWinner(board) {
    for (let line = 0; line < WINNING_LINES.length; line++) {
        let [sq1, sq2, sq3] = WINNING_LINES[line]
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

function initScore() {
    let score = {
        'player': 0,
        'computer': 0,
    }

    return score;
}

function resetScore(score) {
    score.player = 0;
    score.computer = 0;

    return score;
}

function updateScore(board, score) {
    winner = detectWinner(board)

    if (winner === 'Player') {
        score.player += 1;
        prompt(`${winner} won!`);
    } else if (winner === 'Computer') {
        score.computer += 1;
        prompt(`${winner} won!`);
    } else {
        prompt("It's a tie!")
    }

    displayScore(score);
}

function displayScore(score) {
    prompt(`Player: ${score.player} Computer: ${score.computer}`)
}

function matchWinner(score) {
    if (score.player === GAMES_TO_WIN_MATCH) {
        prompt('Player has reached 5 wins! The match goes to the Player.')
        score = resetScore(score);
    } else if (score.computer === GAMES_TO_WIN_MATCH) {
        prompt('Computer has reached 5 wins! The match goes to the Computer.')
        score = resetScore(score);
    }

    return score;
}

function playAgain() {
    prompt("Play again? (y/n)");
    let answer = readline.question().toLowerCase()[0];
    while (answer !== 'y' && answer !== 'n') {
        prompt("Sorry, that's an invalid input. Please choose between 'y' or 'n'")
        prompt("Play again? (y/n)");
        answer = readline.question().toLowerCase()[0];
    }

    return answer;
}

while (true) {
    let score = initScore();

    while (score.player !== GAMES_TO_WIN_MATCH || score.computer !== GAMES_TO_WIN_MATCH) {
        let board = initializeBoard();
        let player = chooseWhoStarts();

        while (true) {
            displayBoard(board);

            chooseSquare(board, player);
            player = alternatePlayer(player);
            if (someoneWon(board) || boardFull(board)) break;
        }

        displayBoard(board);
        updateScore(board, score);

        score = matchWinner(score);
        answer = playAgain();
        if (answer !== 'y') break;
    }

    prompt("Thanks for playing!")
    break;
}