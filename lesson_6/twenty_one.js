const readline = require('readline-sync');
const FULL_DECK = {
  'C': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'D': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'H': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'S': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};
const FACE_CARD_NAMES = [['J', 'Jack'], ['Q', 'Queen'], ['K', 'King'], ['A', 'Ace']];
const STARTING_CARD_NUMBER = 2;

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinWithDelimiters(arr) {
  if (arr.length === 2) {
    return arr.join(' and ')
  } else if (arr.length > 2) {
    let front = arr.slice(0, arr.length - 1).join(', ');
    let end = arr.slice(-1);

    return front.concat(' and ', end);
  }

  return arr.join();
}

function randomIndex(arr) {
  let index = Math.floor(Math.random() * arr.length)

  return index;
}

function initDeck() {
  let deck = FULL_DECK;

  return deck;
};

function addCardToHand(table, card, side) {
  table[side].push(card);
}

function initTable(deck) {
  let table = {
    'player': [],
    'dealer': []
  }

  Object.keys(table).forEach(key => {
    for (let index = 0; index < STARTING_CARD_NUMBER; index++) {
      addCardToHand(table, selectRandomCard(deck), key);
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

function fullFaceName(cardValue) {
  let key = FACE_CARD_NAMES.map(pair => pair[0]);
  let value = FACE_CARD_NAMES.map(pair => pair[1]);
  if (key.includes(cardValue)) {
    return value[key.indexOf(cardValue)];
  }

  return String(cardValue);
}

function numericalValue(table, side) {
  return table[side].map(card => fullFaceName(card[1]))
}

function displayHand(table) {
  console.clear();
  console.log(`Dealer has: ${fullFaceName(table.dealer[0][1])} and ${numericalValue(table, 'dealer').length - 1} unknown card`);
  console.log(`Player has: ${joinWithDelimiters(numericalValue(table, 'player'))}`)
}

function hitOrStay() {
  prompt("Hit (H) or Stay (S)?");
  let answer = readline.question().toLowerCase()[0];
  while (answer !== 'h' && answer !== 's') {
    prompt("Sorry, that's an invalid input. Please choose 'h' to hit or 's' to stay.");
    answer = readline.question().toLowerCase()[0];
  }

  return answer;
}

function dealerPlay(table, deck) {
  while (calculateTotal(table['dealer']) < 17) {
    addCardToHand(table, selectRandomCard(deck), 'dealer')
  }
}

while (true) {
  let deck = initDeck();
  let table = initTable(deck);
  let playerTotal = calculateTotal(table['player']);
  let dealerTotal = calculateTotal(table['dealer']);

  while (true) {
    displayHand(table);
    let answer = hitOrStay();

    if (answer === 'h') {
      addCardToHand(table, selectRandomCard(deck), 'player');
      displayHand(table);
    }

    playerTotal = calculateTotal(table['player'])

    if (playerTotal > 21) {
      prompt(`Players total is ${playerTotal} and exceeded 21.`);
      break;
    } else if (answer === 's') {
      prompt("Player has chose to stay.")
      dealerPlay(table, deck);
      console.log(calculateTotal(table['dealer']));
      break;
    }
  }

  break;
}