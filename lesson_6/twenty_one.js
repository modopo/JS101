const readline = require('readline-sync');
const PLAYERS = ['Player', 'Dealer'];
const FULL_DECK = {
    'C': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'D': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'H': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'S': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};
const STARTING_CARD_NUMBER = 2;

function prompt(message) {
    console.log(`=> ${message}`);
}

function randomIndex(arr) {
    let index = Math.floor(Math.random() * arr.length)

    return index;
}

function initDeck() {
    let deck = FULL_DECK;

    return deck;
};

function initTable(deck) {
    let table = {
        'Player': [],
        'Dealer': []
    }

    Object.keys(table).forEach(key => {
        for (let index = 0; index < STARTING_CARD_NUMBER; index++) {
            table[key].push(selectRandomCard(deck));
        }
    });

    return table;
}

function selectRandomCard(deck) {
    let suits = Object.keys(deck).filter(suit => deck[suit].length > 0)
    let chosenSuit = suits[randomIndex(suits)];
    let card = [chosenSuit, deck[chosenSuit].splice(randomIndex(deck[chosenSuit]), 1)[0]]

    return card;
}

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

    values.filter(value => value === 'A').forEach(instance => {
        if (sum > 21) {
            sum -= 10;
        }
    });

    return sum;
}


let deck = initDeck();
let table = initTable(deck);
console.log(deck);
console.log(table);
console.log(calculateTotal(table['Player']));
console.log(calculateTotal(table['Dealer']));


/*main
while (true) {
    let deck = initDeck();
    let table = initTable(deck);

    while(true) {
        break;
    }
    break;
} */

