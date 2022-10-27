`use strict`;
/*PROBLEM:
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework:Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
*/
/*DETAILS:
1) Understand the problem
- array transformed to string separated by 3 dots
- Q: What is the X days? 
- A: Current index of the array +1
2) Break it up into sub-problems
- Transform array into string
- Transform each element to scting with °C
- String needs to contain day (index +1)
- Add ... between elements at start and end of string
*/

const t1 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  //forecast is an accumulator variable
  let forecast = `...${temps[0]}°C in 1 day...`;

  for (let i = 1; i < temps.length; i++) {
    forecast += `${temps[i]}°C in ${i + 1} days...`;
    // console.log(forecast);
  }
  return forecast;
};

console.log(printForecast(t1));
