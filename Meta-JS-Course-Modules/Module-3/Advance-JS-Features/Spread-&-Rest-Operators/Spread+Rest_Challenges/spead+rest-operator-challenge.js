"use strict"
/**
*@param  @param { Challenge #1:  Copy all contents of arr1 into another array arr2 using the spread operator. }
@param Syntax example much better to read and maintain.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
 */
//Solution goes here
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

/**
 * @param { Challenge #2 : Copy an Array with the Spread Operator }
 *Task: Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy
 */
//Solution goes here
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
  newArr.push([...arr])
      num--;
    }
    return newArr;
  }

  console.log(copyMachine([true, false, true], 2));

/**
 * @param { Challenge #3: Combine Arrays with the Spread Operator }
 *Task: function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
 */
//Solution
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, "is", 'fun'] 
    return sentence;
}

console.log(spreadOut());

 /**
  * @param  { Use the Rest Parameter with Function Parameters }
  *@param Syntax Example:
  function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

@param Task Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
  */
 //Solution goes here
 const sum = (...args) => {

  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}