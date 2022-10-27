`use strict`;
/*PROBLEM 1:
We work for a company building smart home thermometers. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes the may be a sensor error"
*/

const firstTemperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const secondTemperatures = [54, -5, -1, 0, `error`, 3, 10, 22, 15, 94, 35];

/*DETAILS:
1) Understanding the problem
- What is the temperature amplitude? Answer: Difference between highest and lowest temperature
- How to compute the max and min temperatures?
- What is a sensor error and what to do when it occurs? Answer:

2) Breaking it up into sub problems
- How to ignore errors
- Find max value in temp array
- Find max value in temp array
- Subtract min from max (amplitude) and then return it
*/

/*NOTES : FOR Math.max(...temps)
Math.max(...temps) is the syntax
for getting the max of an array that is 
stored in a variable (the ... that is). The 
temps.filter(temps=>typeof temps ===`number) 
basically creates a new array out of the 
array passed to the function with the applied 
filter. In this case it looks at the array 
indexes and filters anything out that is not 
of type `number` and creates a new array. In 
this case the new array is [3, -2, -6, -1, 9,
  13, 17, 15, 14, 9, 5]*/

let mergedArray = firstTemperatures.concat(secondTemperatures);

console.log(mergedArray);

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let maxValue = Math.max(...temps.filter(temps => typeof temps === `number`));
  let minValue = Math.min(...temps.filter(temps => typeof temps === `number`));
  console.log(`MIN: ${minValue} \nMAX: ${maxValue}`);
  return maxValue - minValue;

  // let minValue = Math.min(temps);
  // let maxValue = Math.max(temps);
  // return minValue;
  // return maxValue;
};

const amplitude = calcTempAmplitude(firstTemperatures, secondTemperatures);

console.log(`MERGED IN THE FUNCTION: ${amplitude}`);

const mergeAmplitude = calcTempAmplitude(mergedArray);

console.log(`MERGED BEFORE FUNCTION: ${mergeAmplitude}`);

/*REFERENCES:
Filter Function: https://www.w3schools.com/jsref/jsref_filter.asp#:~:text=The%20filter()%20method%20creates,not%20change%20the%20original%20array.

Math.min/max(...array): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/

/*PROBLEM 2:
The function should now be able to accept 2 arrays of temps
*/

/*DETAILS:
1) Understanding the problem:
Q: With 2 arrays, should we implement the same functionality twice? 
A: No, just merge 2 arrays at the beginning

2) Break up into sub-problems
Q: How to merge 2 arrays?
*/
