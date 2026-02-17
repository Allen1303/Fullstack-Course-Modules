'use strict'

 /**
  * @param { Challenge 1 } Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
 **/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow} = HIGH_TEMPERATURES;//<- Solution

 /**
  * @param {Challenge 2} Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/
const HIGH_TEMPERATURES_2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
//<- Solution
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES_2;

 /**
  *@param {Challenge 3} Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
*/ 
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
//<- Solution
const {today:{low:lowToday, high: highToday_2}} = LOCAL_FORECAST;
 /**
  * @param {Challenge 4} Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
*/
let a = 8, b = 6;
 [a, b] = [b, a]; //<- Solution
 /**
  *@param {Challenge 5} Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
*/

function removeFirstTwo(list) {
  const [,, ...rest] = list; //<- Solution
  return rest;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

 /**
  * @param {Challenge 6} Use destructuring assignment within the argument to the function half to send only max and min inside the function.
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
//<- Solution
const half = ({max, min}) => (max + min) / 2.0;