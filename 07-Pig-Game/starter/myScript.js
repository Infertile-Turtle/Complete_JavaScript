'use strict';
/*NOTES: getElementByID
- document.getElementById(`score--1`) is the same as document.querySelector(`#score--0`), but only works for IDs and not classes like querySelector can.
- Added El to score0 and score1 variables to denote that they are elements and not to confuse them with the scores themselves
*/

/*NOTES: hidden class addition using diceEl.classList.add(`hidden`)
- In order to hide the dice image when the game restarts we need to add the hidden class from the .css file onto the .html file's dice class. 
- The hidden class is defined in the .css file and then applied to the .html file using JavaScript.
- The classList operator is used to add, remove or toggle classes onto an element from .css into .html using the nomenclature element.classList.add(`class you wish to add`) or .remove(`class you wish to remove`) or .toggle(`class you wish to toggle`)
- 
*/

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
let currScore0El = document.querySelector(`#score--0`);
let currScore1El = document.getElementById(`score--1`);
let score0El = document.querySelector(`#current--0`);
let score1El = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//Starting Conditions for the Game
currScore0El.textContent = 0;
currScore1El.textContent = 0;
diceEl.classList.add(`hidden`);
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let holdClick = 0;

//Winning Function
const winning = function () {
  if (score3 >= 100) {
    console.log(`Player 1 WINS`);
  } else if (score4 >= 100) {
    console.log(`Player 2 WINS`);
  }
};

//Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  //1. Generate a random dice roll
  const dicePic = document.querySelector(`.dice`);
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove(`hidden`);
  dicePic.src = `dice-${diceRoll}.png`;

  if (score3 >= 100) {
    console.log(`Player 1 WINS`);
  } else if (score4 >= 100) {
    console.log(`Player 2 WINS`);
  } else if (diceRoll >= 2 && (holdClick % 2 === 0 || holdClick === 0)) {
    // console.clear();
    winning();
    score1 += diceRoll;
    score0El.textContent = score1;
  } else if (diceRoll === 1 && (holdClick % 2 === 0 || holdClick === 0)) {
    // console.clear();
    winning();
    score1 = 0;
    score0El.textContent = score1;
    console.log(`Go Next gg`);
    holdClick += 1;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  } else if (diceRoll >= 2 && holdClick % 2 !== 0) {
    // console.clear();
    winning();
    score2 += diceRoll;
    score1El.textContent = score2;
  } else if (diceRoll === 1 && holdClick % 2 !== 0) {
    // console.clear();
    winning();
    console.log(`Go Next gg`);
    score2 = 0;
    score1El.textContent = score2;
    holdClick += 1;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});

btnNew.addEventListener(`click`, function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  score1 = 0;
  score2 = 0;
  score3 = 0;
  score4 = 0;
  diceEl.classList.add(`hidden`);
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  holdClick = 0;
  if (player1El.classList.contains(`player--active`) === true) {
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});

btnHold.addEventListener(`click`, function () {
  if (holdClick % 2 === 0 || holdClick === 0) {
    score3 += score1;
    currScore0El.textContent = score3;
    winning();
    score1 = 0;
    score0El.textContent = 0;
    holdClick += 1;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  } else if (holdClick % 2 !== 0) {
    score4 += score2;
    currScore1El.textContent = score4;
    winning();
    score2 = 0;
    score1El.textContent = 0;
    holdClick += 1;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});
