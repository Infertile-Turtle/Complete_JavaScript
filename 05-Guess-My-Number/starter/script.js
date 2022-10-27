'use strict';

/*NOTES: CSS Class vs ID Nomenclature
1) For class selection use the .classname nomenclature. If it was an ID instead we would use the #ID nomenclature.

The . actually lets JS know you're searching for a class and then the text is obviously the name of the class you are searching for. Likewise the # is telling JS to look for the following text in an ID
*/

/*Old Code: Code that is Old

//returns the entire P element that is of class message, then wehn .textContent is added it returns just the text content of that element; which in this case is "Start guessing..."
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number 🎉`;

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;

document.querySelector(`.score`).textContent = 10;

console.log(
  document.querySelector(`.number`).textContent,
  document.querySelector(`.score`).textContent
);

console.log(document.querySelector(`.guess`).value);

document.querySelector(`.guess`).value = 23;

console.log(document.querySelector(`.guess`).value);*/

/*NOTES: What is DOM and DOM Manipulation?

- Definition of DOM: Document Object Model; structured representation of HTML documents which allows for Javascript to access HTML elements and styles to manipulate them. For example, it will allow us to change text, HTML attributes and CSS styles with JavaScript

- Definition of DOM Manipulation: Making JavaScript interact with a webpage.
*/

/*NOTES: Handling Click Events

- In order to listen for events we first need to select the element where the event will happen; in this case its on the "Check" button, where we expect a click.

-addEventListener is actually a method so we need to call it using parentheses. [addEventListener()] and pass in the type of the event, in this case a simple click. So the method is as such addEventListener(`What event to look for`, Event Handler Function)

-The event handler function basically is defining what actions we want done when the action looked for is completed.

-The Number() function will turn the returned value from a string into a number so that we can compare that number to the randomly generated number later on.

-To define randomly generated number we need to define it outside the event handler because we only want the number to be generated once when the program starts and not recalculated after every click.

-Math is an object that JavaScript gives us with a lot of different methods; one being random, which gives us a number between 0 and 1.

-Math.trunc cuts off the decimal so Math.trunc(Math.random() * 20) would give us a number between 0 and 19, we want 1-20 so add 1

-

*/

let numberRandom = Math.trunc(Math.random() * 20) + 1;

//Score variable is a let because we will need to decrease it after every wrong score. AKA state variable
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//To diplay the randomly generated number in the ? box for now: document.querySelector

//This code will look for a click event on the "Check!" button and then return to the console the number in the "guess" box. So if we put 9 in the box and hit check, 9 would be returned to the console. Same goes for MAth.trunc, this removes the decimals, leaving us with only whole numbers. It is not btn check because even though they are part of the same class btn is a separate class than check is. btn is also the class of the "Again!" button. So in this case we only use the check class since we only want the logic applied to that button and not both.

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(typeof guess, guess);

  //if statement only executes when condition is true and since clicking with no input yields 0, which is a falsy value we need to add the not (!) operator to make the blank input = true and therefore make the if statement run. Also guess == false would work because guess is 0 which is a falsy value and falsy == falsy yields true.

  if (!guess) {
    displayMessage(`🚫 No Number!`);
  } else if (guess === numberRandom) {
    displayMessage(`🎉 Correct Number!`);

    document.querySelector(`.number`).textContent = numberRandom;
    //When the right number is guessed also update background (css element) to a green color and the revealed number to be wider
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    //This code sets the width of the element with the class of .number to 30 px
    //Whenever we are manipulating a style we must use a string with a unit so set equal to `30rem` not just 30. In css file has a width of 15rem so changing to 30rem
    document.querySelector(`.number`).style.width = `30rem`;
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== numberRandom && score > 1) {
    //You are able to pass the argument from the ternary operator to a function and have it run with the given condition.
    displayMessage(
      guess > numberRandom ? `📈 Guess is Too High!` : `📉 Guess is Too Low!`
    );
    score--;
    document.querySelector(`.score`).textContent = score;
  }

  //Each time there is a wrong guess we need to decrease score by 1
  // else if (guess > numberRandom && score > 1) {
  //   document.querySelector(`.message`).textContent = `📈 Guess is Too High!`;
  //   // score = score - 1;
  //   score--;
  //   document.querySelector(`.score`).textContent = score;
  // } else if (guess < numberRandom && score > 1) {
  //   document.querySelector(`.message`).textContent = `📉 Guess is Too Low!`;
  //   // score = score - 1;
  //   score--;
  //   document.querySelector(`.score`).textContent = score;
  // }
  else if (guess !== numberRandom && score <= 1) {
    score--;
    document.querySelector(`.score`).textContent = score;
    displayMessage(`🤯 YOU LOSE!`);
  }
});

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the'again'class and attach a click event handler 2. In the handler function,restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color(#222)and number width (15rem)
*/

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
