const readline = require('readline-sync');
const FULL_DECK = {
    C: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    D: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    H: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    S: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};
const FACE_CARD_NAMES = [['J', 'Jack'], ['Q', 'Queen'], ['K', 'King'], ['A', 'Ace']];
const STARTING_CARD_NUMBER = 2;
const DEALER_MIN = 17;
const BEST_HAND_VALUE = 21;
const POINTS_TO_WIN_MATCH = 5;

//Formatting functions-------------------------------------------------------------------
function prompt(message) {
    console.log(`=> ${message}`);
}

function joinWithDelimiters(arr) {
    if (arr.length === 2) {
        return arr.join(' and ');
    } else if (arr.length > 2) {
        let front = arr.slice(0, arr.length - 1).join(', ');
        let end = arr.slice(-1);

        return front.concat(' and ', end);
    }

    return arr.join();
}

function randomIndex(arr) {
    let index = Math.floor(Math.random() * arr.length);

    return index;
}

function justNumericalValue(table, side) {
    return table[side].map(card => justFaceNames(card[1]));
}

function justFaceNames(cardValue) {
    let key = FACE_CARD_NAMES.map(pair => pair[0]);
    let value = FACE_CARD_NAMES.map(pair => pair[1]);
    if (key.includes(cardValue)) {
        return value[key.indexOf(cardValue)];
    }

    return String(cardValue);
}

//Game state-----------------------------------------------------------------------------
function initDeck() {
    let deck = FULL_DECK;

    return deck;
}

function initTable(deck) {
    let table = {
        player: [],
        dealer: []
    };

    Object.keys(table).forEach(key => {
        for (let index = 0; index < STARTING_CARD_NUMBER; index++) {
            addCardToHand(table, selectRandomCard(deck), key);
        }
    });

    return table;
}

function initScore() {
    let score = {
        player: 0,
        dealer: 0,
    };

    return score;
}

//Deck and Card actions------------------------------------------------------------------
function selectRandomCard(deck) {
    let suits = Object.keys(deck).filter(suit => deck[suit].length > 0);
    let chosenSuit = suits[randomIndex(suits)];

    //consume card - destructive
    let card = [chosenSuit, deck[chosenSuit].splice(randomIndex(deck[chosenSuit]), 1)[0]];

    return card;
}

function addCardToHand(table, card, side) {
    table[side].push(card);
}

//Scoring--------------------------------------------------------------------------------
function displayScore(score) {
    prompt(`Player: ${score.player} Dealer: ${score.dealer}`);
}

function updateScoreToWinner(score, winner) {
    score.winner += 1;

    if (winner === 'player') {
        prompt('You are a winner!');
    } else if (winner === 'dealer') {
        prompt('Dealer is the winner.');
    }

    displayScore(score);
}

function resetScore(score) {
    score.player = 0;
    score.computer = 0;

    return score;
}

//Calculate------------------------------------------------------------------------------
function calculateTotal(hand) {
    let values = hand.map(card => card[1]);

    let sum = 0;
    values.forEach(value => {
        if (value === 'A') {
            sum += 11;
        } else if (['J', 'Q', 'K'].includes(value)) {
            sum += 10;
        } else {
            sum += Number(value);
        }
    });

    values.filter(value => value === 'A').forEach(_ => {
        if (sum > BEST_HAND_VALUE) {
            sum -= 10;
        }
    });

    return sum;
}

//Determinant----------------------------------------------------------------------------
function determineBust(table, side) {
    let total = calculateTotal(table[side]);

    if (side === 'player' && total > BEST_HAND_VALUE) {
        displayHands(table, false);
        prompt(`You've exceeded 21 with a total of ${total}.`);
        return true;
    } else if (side === 'dealer' && total > BEST_HAND_VALUE) {
        displayHands(table, false);
        prompt(`The dealer exceeded 21 with a total of ${total}.`);
        return true;
    }

    return false;
}

function determineWinner(table, score) {
    let playerTotal = calculateTotal(table['player']);
    let dealerTotal = calculateTotal(table['dealer']);

    displayHands(table, false);
    prompt(`The player has a total of ${playerTotal}. The dealer has a total of ${dealerTotal}`);

    if (playerTotal > dealerTotal) {
        updateScoreToWinner(score, 'player');
    } else if (playerTotal < dealerTotal) {
        updateScoreToWinner(score, 'dealer');
    } else {
        prompt("It's a tie!");
    }

    displayScore(score);
}

function determineMatch(score) {
    if (score.player === POINTS_TO_WIN_MATCH) {
        prompt('Player has reached 5 wins! The match goes to the Player.');
        score = resetScore(score);
    } else if (score.dealer === POINTS_TO_WIN_MATCH) {
        prompt('Dealer has reached 5 wins! The match goes to the Dealer.');
        score = resetScore(score);
    }

    return score;
}

//Interface------------------------------------------------------------------------------
function displayHands(table, hidden = true) {
    if (hidden) {
        console.clear();
        console.log(`Dealer has: ${justFaceNames(table.dealer[0][1])} and (${justNumericalValue(table, 'dealer').length - 1}) unknown card`);
        console.log(`Player has: ${joinWithDelimiters(justNumericalValue(table, 'player'))}`);
        console.log('-----------------------------------');
    } else {
        console.clear();
        console.log(`Dealer has: ${joinWithDelimiters(justNumericalValue(table, 'dealer'))}`);
        console.log(`Player has: ${joinWithDelimiters(justNumericalValue(table, 'player'))}`);
        console.log('-----------------------------------');
    }
}

//Actions for Game Flow--------------------------------------------------------
function hitOrStay() {
    prompt("Hit (h) or Stay (s)? Please choose 'h' or 's'.");
    let answer = readline.question().toLowerCase()[0];
    while (answer !== 'h' && answer !== 's') {
        prompt("Sorry, that's an invalid input. Please choose 'h' to hit or 's' to stay.");
        answer = readline.question().toLowerCase()[0];
    }

    return answer;
}

function beginDealerTurn(table, deck) {
    prompt("Player has chosen to stay.");
    prompt("Press [ENTER] to see what the Dealer does...");
    let answer = readline.question();

    dealerPlays(table, deck);
}

function dealerPlays(table, deck) {
    while (calculateTotal(table['dealer']) < DEALER_MIN) {
        addCardToHand(table, selectRandomCard(deck), 'dealer');
    }
}

function revealWinner(table, score) {
    displayHands(table, true);
    prompt(`The Dealer has chosen to stay after being dealt ${justNumericalValue(table, 'dealer').length - 2} card.`);
    prompt("Press [ENTER] to reveal the winner!");
    let answer = readline.question();

    determineWinner(table, score);
}

function playAgain() {
    prompt("Try again? (y/n)");
    let answer = readline.question().toLowerCase()[0];
    while (answer !== 'y' && answer !== 'n') {
        prompt("Sorry, that's an invalid input. Please choose between 'y' or 'n'");
        prompt("Try again? (y/n)");
        answer = readline.question().toLowerCase()[0];
    }

    return answer;
}

//Main
while (true) {
    let score = initScore();

    while (score.player !== POINTS_TO_WIN_MATCH || score.dealer !== POINTS_TO_WIN_MATCH) {
        let deck = initDeck();
        let table = initTable(deck);

        while (true) {
            displayHands(table);

            let answer = hitOrStay();
            if (answer === 'h') {
                addCardToHand(table, selectRandomCard(deck), 'player');
                displayHands(table);
            }

            let playerBusted = determineBust(table, 'player');

            if (playerBusted) {
                updateScoreToWinner(score, 'dealer');
                break;
            } else if (answer === 's') {
                beginDealerTurn(table, deck);

                let dealerBusted = determineBust(table, 'dealer');

                if (dealerBusted) {
                    updateScoreToWinner(score, 'player');
                } else {
                    revealWinner(table, score);
                }

                break;
            }
        }

        score = determineMatch(score);

        let answer = playAgain();
        if (answer !== 'y') break;
    }
    prompt("Thanks for playing!");
}