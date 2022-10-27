'use strict';

/*NOTES:
- Since querySelector would only return the first show-modal button we need to use querySelectorAll to show all elements/nodes.
- Must loop through node list as if it were an array if we wanted an action to apply to all nodes in the node list for btnsShowModal.
*/

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

const showModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(`click`, showModal);
}

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

/*NOTES: closeModal Function Specifics
- We cannot say btnCloseModal.addEventListener(`click`, closeModal()) because this would call the function as soon as soon as JS executes this line and we want the function to execute only when the click event happens on the closeModal button.
*/

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

/*NOTES: Keyboard Events
- These are global events that do not just happen on a single elemet.
- For global events we have to listen on the whole document.
- document.addEventListner method will listen for this event everywhere, not just in a certain class/element like document.querySelector(`.close-modal`).addEventListner does.
- In order to specify the event to happen when a SPECIFIC key is pressed we need to give the function a parameter (called event in this case), otherwise document.addEventListener(`keydown`, function () {}) will run the function any time ANY key is pressed.
- When an event happens JS creates an object from that event with information that we can then access.
- As the event occurs JS will call this function with the event object as an argument. This works because we do not call the function ourselves, we only define it. We will learn mechancs of this a bit later. It is an object with key/value pairs.
- Since it is an object called event with key/value pairs, we can access the string for of the kep pressed by going to event.key and looking for Escape.
- Also we only want to close the modal if it is visible. If it is hidden we dont want to close it by using modal.classList.contains(`hidden`)
*/

document.addEventListener(`keydown`, function (event) {
  // console.log(event.key);
  if (
    event.key === `Escape` &&
    (modal.classList.contains(`hidden`) === false ||
      overlay.classList.contains(`hidden`) === false)
  ) {
    console.log(event.key);
    closeModal();
  }
});
