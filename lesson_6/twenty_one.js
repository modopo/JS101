const readline = require('readline-sync');
const FULL_DECK = {
  "♣": [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  "♦": [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  "♥": [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  "♠": [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};
const FACE_CARD_NAMES = [['J', 'Jack'], ['Q', 'Queen'],
  ['K', 'King'], ['A', 'Ace']];
const STARTING_CARD_NUMBER = 2;
const DEALER_MIN = 17;
const BEST_HAND_VALUE = 21;
const POINTS_TO_WIN_MATCH = 5;

//Formatting functions---------------------------------------------------------
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
  return table[side].map(card => justFaceNames(card[1]) + card[0]);
}

function justFaceNames(cardValue) {
  let key = FACE_CARD_NAMES.map(pair => pair[0]);
  let value = FACE_CARD_NAMES.map(pair => pair[1]);
  if (key.includes(cardValue)) {
    return value[key.indexOf(cardValue)];
  }

  return String(cardValue);
}

//Game state-------------------------------------------------------------------
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

//Deck and Card actions--------------------------------------------------------
function selectRandomCard(deck) {
  let suits = Object.keys(deck).filter(suit => deck[suit].length > 0);
  let chosenSuit = suits[randomIndex(suits)];

  //consume card - destructive
  let card = [chosenSuit, deck[chosenSuit].splice(
    randomIndex(deck[chosenSuit]), 1)[0]];

  return card;
}

function addCardToHand(table, card, side) {
  table[side].push(card);
}

//Scoring----------------------------------------------------------------------
function displayScore(score) {
  prompt(`Player: ${score.player} Dealer: ${score.dealer}`);
}

function updateScoreToWinner(score, winner) {
  if (winner !== '') {
    score[winner] += 1;
  }
}

function resetScore(score) {
  score.player = 0;
  score.dealer = 0;

  return score;
}

//Calculate--------------------------------------------------------------------
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

//Determinant------------------------------------------------------------------
function determineBust(table, side) {
  let total = calculateTotal(table[side]);

  return total > BEST_HAND_VALUE;
}

function determineWinner(table, score, playerTotal, dealerTotal) {
  if (playerTotal > dealerTotal) {
    updateScoreToWinner(score, 'player');
    displayHands(table, score, false);
    prompt(`Your total is ${playerTotal}` +
      ` and the dealer's total is ${dealerTotal}`);
    prompt("The winnner is the Player!");
  } else if (playerTotal < dealerTotal) {
    updateScoreToWinner(score, 'dealer');
    displayHands(table, score, false);
    prompt(`Your total is ${playerTotal}` +
      ` and the dealer's total is ${dealerTotal}`);
    prompt("The winner is the Dealer!");
  } else {
    displayHands(table, score, false);
    prompt(`Your total is ${playerTotal}` +
      ` and the dealer's total is ${dealerTotal}`);
    prompt("It was a tie!");
  }
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

//Interface---------------------------------------------------------------------
function welcome() {
  console.clear();
  console.log("Welcome to a game of Twenty-One." +
    "First to reach 5 points wins the match.");
  console.log("Press [Enter] to continue.");
  readline.question();
}

function displayHands(table, score, hidden = true) {
  console.clear();
  displayScore(score);

  let dealerFirstCard = justNumericalValue(table, 'dealer')[0];
  let dealerUnknownCards = justNumericalValue(table, 'dealer').length - 1;
  let dealerFull = joinWithDelimiters(justNumericalValue(table, 'dealer'));
  let playerFull = joinWithDelimiters(justNumericalValue(table, 'player'));

  if (hidden) {
    console.log(`Dealer has: ${dealerFirstCard} and ` +
      `(${dealerUnknownCards}) unknown card(s)`);
    console.log(`Player has: ${playerFull}`);
    console.log('-----------------------------------');
  } else {
    console.log(`Dealer has: ${dealerFull}`);
    console.log(`Player has: ${playerFull}`);
    console.log('-----------------------------------');
  }
}

//Actions for Game Flow--------------------------------------------------------
function hitOrStay() {
  prompt("Hit (h) or Stay (s)? Please choose 'h' or 's'.");
  let answer = readline.question().toLowerCase();
  while (answer !== 'h' && answer !== 's') {
    prompt("Sorry, that's an invalid input. Please choose " +
      "'h' to hit or 's' to stay.");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function dealerTurn(table, deck, score) {
  while (calculateTotal(table['dealer']) < DEALER_MIN) {
    addCardToHand(table, selectRandomCard(deck), 'dealer');
  }

  dealerEndSequence(table, score, determineBust(table, 'dealer'));

}

function dealerEndSequence(table, score, bust) {
  let playerTotal = calculateTotal(table['player']);
  let dealerTotal = calculateTotal(table['dealer']);

  if (bust) {
    updateScoreToWinner(score, 'player');
    displayHands(table, score, false);
    prompt("The dealer was dealt" +
      ` ${justNumericalValue(table, 'dealer').length - 2} card(s).`);
    prompt(`The dealer's total is ${dealerTotal} ` +
      `and exceeded ${BEST_HAND_VALUE}.`);
    prompt(`The winner is the Player!`);

  } else if (!bust) {
    revealWinner(table, score);
    determineWinner(table, score, playerTotal, dealerTotal);
  }
}

function revealWinner(table, score) {
  displayHands(table, score);
  prompt("The Dealer has chosen to stay after being dealt" +
    ` ${justNumericalValue(table, 'dealer').length - 2} card.`);
  prompt("Press [ENTER] to reveal the winner!");
  readline.question();
}

function playerTurn(table, deck, score) {
  while (true) {
    let answer = hitOrStay();
    if (answer === 'h') {
      addCardToHand(table, selectRandomCard(deck), 'player');
      displayHands(table, score);
    }

    let playerBusted = determineBust(table, 'player');
    if (answer === 's' || playerBusted) {
      break;
    }
  }

  playerEndSequence(table, score, 'dealer', determineBust(table, 'player'));
}

function playerEndSequence(table, score, winner, busted = false) {
  displayHands(table, score);

  let playerTotal = calculateTotal(table['player']);

  if (busted) {
    updateScoreToWinner(score, winner);
    displayHands(table, score, false);
    prompt(`Your total is ${playerTotal} and exceeded ${BEST_HAND_VALUE}.`);
    prompt(`The winner is the ${winner}!`);
  } else if (!busted) {
    prompt("Player has chosen to stay.");
    prompt("Press [ENTER] to see what the Dealer does...");
    readline.question();
  }
}

function playAgain() {
  prompt("Try again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt("Sorry, that's an invalid input. Please choose between 'y' or 'n'");
    prompt("Try again? (y/n)");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

//Main
while (true) {
  welcome();
  let score = initScore();

  while (score.player !== POINTS_TO_WIN_MATCH ||
    score.dealer !== POINTS_TO_WIN_MATCH) {
    let deck = initDeck();
    let table = initTable(deck);
    displayHands(table, score);

    playerTurn(table, deck, score);

    if (!determineBust(table, 'player')) {
      dealerTurn(table, deck, score);
    }

    score = determineMatch(score);

    let answer = playAgain();
    if (answer !== 'y') break;
  }
  prompt("Thanks for playing!");
  break;
}
