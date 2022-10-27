'use strict';

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
let score0El = document.querySelector(`#score--0`);
let score1El = document.getElementById(`score--1`);
const current0E1 = document.getElementById(`current--0`);
const current1E1 = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//NOTES: This has to be outside of the function, because if not every time the button is hit the score would be reset and this is not what we want.

//State variable to let us know if the game is still going or not

//NOTES: A bucnh of empty variables can be declared using commas and let. Declaring a variable is not the same as assigning it a vlaue.
let scores, currentScore, activePlayer, playing;

const init = function () {
  /*NOTES: Variable Scoping Issue
  Since all the variables below are declared in the init function and they are not accessible outside of the function, so they are scoped inside the init function.
  The solution is to declare the variables outside of the function, but give them no value.*/
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
  diceEl.classList.add(`hidden`);
};

//Starting conditions for the game
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //NOTES: if the current active player is 0, then we want it to change to 1, else change to 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //NOTES: classList.toggle will add the class if it is not there and remove the class if it is already there
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

//Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    //1) Add current score to active player's score
    /*NOTES: This is the same as scores[1] = scores[1]
  +currentScore if active player is 1 and scores[0] = scores
  [0]+currentScore if active player is 0*/
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    //2) Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      //Finish the game if so
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add(`hidden`);
    } else {
      switchPlayer();
    }
  }
});

//NOTES: We do not call the function as init(), but rather JavaScript calls the function making it init just fine.
btnNew.addEventListener(`click`, init);
