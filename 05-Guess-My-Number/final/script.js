'use strict';
let numberRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage(`🚫 No Number!`);
  } else if (guess === numberRandom) {
    displayMessage(`🎉 Correct Number!`);

    document.querySelector(`.number`).textContent = numberRandom;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== numberRandom && score > 1) {
    displayMessage(
      guess > numberRandom ? `📈 Guess is Too High!` : `📉 Guess is Too Low!`
    );
    score--;
    document.querySelector(`.score`).textContent = score;
  } else if (guess !== numberRandom && score <= 1) {
    score--;
    document.querySelector(`.score`).textContent = score;
    displayMessage(`🤯 YOU LOSE!`);
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  numberRandom = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).textContent = `?`;
  // console.log(numberRandom);
});
