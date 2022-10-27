//Data Structures

// const friend1 = `Michael`;
// const friend2 = `Stephen`;
// const friend3 = `Peter`;

// let friends = [`Michael`, `Stephen`, `Peter`];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);
// friends = [`Bob`, `Alice`];
// console.log(friends);

// const firstName = `Andrew`;
// const Andrew = [firstName, `Fairchild`, 2022 - 1993, `Engineer`, friends];
// console.log(Andrew);
// console.log(Andrew.length);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const year = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// let friends = [`Michael`, `Stephen`, `Peter`];

// //Add Elements
// const newLength = friends.push(`Jay`);
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// //Remove Elements
// friends.pop(); //remove last element of array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //remove first element of array
// console.log(friends);

// console.log(friends.indexOf(`Stephen`));
// console.log(friends.indexOf(`Bob`));

// friends.push(23);
// console.log(friends.includes(`Stephen`));
// console.log(friends.includes(23));
// console.log(friends.includes(`23`));

// if (friends.includes(`Stephen`)) {
//   console.log(`You have a friend called stephen`);
// }

// //Array
// const jonasArray = [
//   `Andrew`,
//   `Fairchild`,
//   2022 - 1993,
//   `Programmer`,
//   [`Ben`, `Allah`, `Nick`],
// ];

// //Objects, have properties...in this case has 5 properties(aka keys) firstName, lastName, age, job and friends
// const andrew = {
//   firstName: `Andrew`,
//   lastName: `Fairchild`,
//   age: 2022 - 1993,
//   job: `Programmer`,
//   friends: [`Ben`, `Allah`, `Nick`],
// };

// console.log(andrew);
// console.log(andrew.lastName);
// console.log(andrew[`lastName`]);

// const nameKey = `Name`;

// //cant do this with dot notation
// console.log(andrew[`first` + nameKey]);
// console.log(andrew[`last` + nameKey]);

// //console.log(andrew.`first`+nameKey)

// const interestedIn = prompt(
//   `What do you want to know about Andrew? Choose between firstName, lastName, age, job and friends.`
// );

// console.log(interestedIn);

// //gives us undefined because we are trying to access a property on an object that does not exist. andrew does not have a property/key named interestedIn...
// // console.log(andrew.interestedIn);

// //Works because bracket notation allows foir entry of variables that retuen text equal to the property/key we are trying to access

// //undefined is a falsy value

// if (andrew[interestedIn]) {
//   console.log(andrew[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job and friends.`
//   );
// }

// andrew.location = `USA`;
// andrew[`twitter`] = `@InftlPenguin`;
// console.log(andrew);

// //challenge
// //write "Andrew has 3 friends and his best friend is called Ben"

// console.log(
//   `${andrew.firstName} has ${andrew.friends.length} friends and his best friend is ${andrew.friends[0]}.`
// );

// //when trying to use bracket notation the key/property can only be a string, so it would be andrew[`friends`] not andrew[friends], however when using dot notation it does not have to be a string, so andrew.friends works fine
// console.log(andrew.friends.length);
// console.log(andrew[`friends`][0]);

// const andrew = {
//   firstName: `Andrew`,
//   lastName: `Fairchild`,
//   birthYear: 1993,
//   job: `Programmer`,
//   friends: [`Ben`, `Allah`, `Nick`],
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   let age = 2022 - this.birthYear;
//   //   return age;
//   // },

//   //this is essentially creating andrew.age as a paramater in order to just run the fucntion 1 time and store the value and just return that value rather than the previous iterations above which have to recalculate the age every time you call the paramater/function calcAge
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   //any function attached to an object is called a method

//   summary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
//   },
//   //have to call calcAge and not just age because if calcAge was not called first below then age would not have been calculated yet....
// };

// console.log(andrew.calcAge());

// console.log(andrew.age);
// console.log(andrew.age);
// console.log(andrew.age);

// // console.log(andrew.calcAge(andrew.birthYear));

// //Challenge
// //"Andrew is a 29-year old programmer and he has a/no driver's license"

// console.log(andrew.summary());

// console.log(`Lifting weights repetition 1 🏋️`);
// console.log(`Lifting weights repetition 2 🏋️`);
// console.log(`Lifting weights repetition 3 🏋️`);
// console.log(`Lifting weights repetition 4 🏋️`);
// console.log(`Lifting weights repetition 5 🏋️`);
// console.log(`Lifting weights repetition 6 🏋️`);
// console.log(`Lifting weights repetition 7 🏋️`);
// console.log(`Lifting weights repetition 8 🏋️`);
// console.log(`Lifting weights repetition 9 🏋️`);
// console.log(`Lifting weights repetition 10 🏋️`);

// //for loop keeps running while condition is TRUE and stops when FALSE, in this case when rep = 11 it will stop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// const andrewArray = [
//   `Andrew`,
//   `Fairchild`,
//   2022 - 1993,
//   `Programmer`,
//   [`Ben`, `Allah`, `Nick`],
//   true,
// ];

// const types = [];

// // console.log(andrewArray[0]);
// // console.log(andrewArray[1]);
// // console.log(andrewArray[2]);
// // console.log(andrewArray[3]);
// // console.log(andrewArray[4]);

// for (let i = 0; i <= andrewArray.length - 1; i++) {
//   //Reading from Andrew Array
//   console.log(andrewArray[i], typeof andrewArray[i]);

//   //Filling types array
//   // types[i] = typeof andrewArray[i];
//   types.push(typeof andrewArray[i]);
// }

// console.log(types);

// const years = [1993, 2007, 1969, 2020];
// const ages = [];

// // console.log(years.length);
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// //continue and break
// //only print elements to array that are strings, continue is perfect for this, continue basically skips or exists the current iteration or the action if the element is not a string
// console.log(`----ONLY STRINGS----`);
// for (let i = 0; i <= andrewArray.length - 1; i++) {
//   if (typeof andrewArray[i] !== `string`) continue;
//   console.log(andrewArray[i], typeof andrewArray[i]);
// }

// //as soon as a number is found we want to break the loop
// console.log(`----BREAK WITH NUMBER----`);
// for (let i = 0; i <= andrewArray.length - 1; i++) {
//   if (typeof andrewArray[i] === `number`) break;
//   console.log(andrewArray[i], typeof andrewArray[i]);
// }

// const andrew = [
//   `Andrew`,
//   `Fairchild`,
//   2022 - 1993,
//   `Programmer`,
//   [`Ben`, `Allah`, `Nick`],
// ];

// //loop array backwards
// for (let i = andrew.length - 1; i >= 0; i--) {
//   //Reading from Andrew Array
//   console.log(i, andrew[i], typeof andrew[i]);
// }

// //creating a loop inside of a loop - we have 3 different exercises and we want to do each of them 5 times, total of 15 reps, 5 of each exercise

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----------STARTING EXERCISE ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: LIFTING WEIGHTS ${rep} 🏋️`);
//   }
// }

// //FOR LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// //WHILE LOOP - more versatile than for loop and can be used in a larger variety of scenarios because it does not need a counter, but in this use case it did need one, but all it needs is for a condition, any condition to be true in order to run

// let rep = 1;

// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

//Math.random()*6 returns a decimal and need to get rid of the decimal using Math.trunc
let dice = Math.trunc(Math.random() * 6) + 1;

// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  //reassign dice vale at the end of each iteration toavoid an infinite loop
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled a ${dice}`);
  }
}
