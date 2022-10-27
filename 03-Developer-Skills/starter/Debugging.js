`use strict`;

const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celcius`,
    /* C) FIX THE BUG
    BEFORE: 
    value: prompt(`Degrees celcius:`)*/

    value: Number(prompt(`Degrees celcius:`)),
  };

  // B) FIND THE BUG
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  // debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug:
console.log(measureKelvin());

/* B) Find the bug:
From console.log(measurement) and console.table(measurement) we see that the entered prompt of 10 is actually logging as a string and not a number. Prompt function always returns a string. And when the + operator sees a string will convert both operands to a string and concat the strings
*/

/* C) Fix the bug:
add Number() function around the prompt function.
*/

/* D) Using a Debugger in Google Chrome:
D.1) Go to Sources>.js file you are working from.
D.2) Click on the line of code to add a breakpoint, now when we reload the page the execution will stop at the breakpoint
*/
