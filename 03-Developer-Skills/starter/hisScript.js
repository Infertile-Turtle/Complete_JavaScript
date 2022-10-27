// Remember, we're gonna use strict mode in all scripts now!
`use strict`;
/*PROBLEM 1
We work for a company building smart home thermometers. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes the may be a sensor error"
*/

const temperatures = [3, -1000, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

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

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== `number`) {
      continue;
    }
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(`MIN: ${min} \nMAX: ${max}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitude(temperatures, [3, 55, 91, -30]);

console.log(amplitudeNew);

/*NOTES: FOR CONTINUE
This will not execute any code below it if the condition is met. So in this case if the type of currentTemp (temps[i]) is not equal to `number` then do not execute the min/max statements and move on to the following temps[i]
*/

/*NOTES: FOR MAX
before first loop max is set equal to 3.
at i=1: 3 is compared to 7 and max becomes equal to 7
at i=2: 7 is compared to 4 and max stays equal to 7. 
*/

/*NOTES: FOR MIN
before first loop min is set equal to 3.
at i=1: 3 is compared to 7 and min stays equal to 3
at i=2: 3 is compared to 4 and min stays equal to 3. 
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
