const readline = require('readline-sync');
const PLAYERS = ['Player', 'Dealer'];
const FULL_DECK = {
    'Club': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'Diamond': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'Heart': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    'Spade': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
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
        for(let index = 0; index < STARTING_CARD_NUMBER; index++) {
            table[key].push(selectRandomCard(deck));
        }
    });

    return table;
}

function selectRandomCard(deck) {
    let suits = Object.keys(deck).filter(suit => deck[suit].length > 0)
    let chosenSuit = suits[randomIndex(suits)];

    return deck[chosenSuit].splice(randomIndex(deck[chosenSuit]), 1)[0];
};

let deck = initDeck();
let table = initTable(deck);

console.log(deck);
console.log(table);

