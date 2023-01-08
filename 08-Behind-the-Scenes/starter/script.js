'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}

const firstName = `Andrew`;
console.log(calcAge(1993));
// console.log(age);
