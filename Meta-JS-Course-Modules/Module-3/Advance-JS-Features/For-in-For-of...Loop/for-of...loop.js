"use strict";
/** 
 * @param { 🧠 Challenge 1: Basic Array Iteration }
Objective: Loop through an array and log each item.
@param Use a for...of loop to access each item in an array. This loop is cleaner and easier to read when you just need to access values (not the index). 
 */

// Use a for...of loop to log each fruit in the array
const fruits = ["apple", "banana", "cherry"];
//solution
for (const element of fruits) {
  console.log(element);
}
/**
 * @param { 🧠 Challenge 2: Sum Array of Numbers }
Objective: Return the total sum of all numbers in the array.
Expected Output: 100
 */
const scores = [10, 20, 30, 40];

// Use a for...of loop to calculate and return the total sum
function totalScore(arr) {
  let arrSum = 0;
  for (const num of arr) {
    arrSum += num;
  }
  return arrSum;
}

console.log(totalScore(scores));
/**
 * @param { 🧠 Challenge 3: Filter Words Longer Than 4 Letters }
Objective: Create a new array with words longer than 4 letters.
Expected Output: ["notebook", "eraser"]
 */
const words = ["pen", "notebook", "book", "eraser", "ink"];

function filterLongWords(arr) {
  // Use a for...of loop to return a new array of words longer than 4 letters
  //Solution below
  const longWords = [];
  for (const word of arr) {
    word.length > 4 && longWords.push(word);
  }
  return longWords;
}
console.log(filterLongWords(words));

/**
 * @param { 🧠 Challenge 4: Iterate Array of Objects }
Objective: Log only the name of each user.  Use a for...of loop to log each user's name

@param Expected output: Alice Bob Charlie

@param Example:
const items = [{ id: 1 }, { id: 2 }];
for (const item of items) {
  console.log(item.id); // Access object property inside the loop
}
 */
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 },
];

function logUserNames(arr) {
  //Solution code below
  for (const prop of arr) {
    console.log(prop.name);
  }
}

logUserNames(users);
/**
 * @param { 🧠 Challenge 5: Destructure Inside For...of Loop }
Objective: Create a string summary by destructuring object properties inside the loop.  Use a for...of loop with object destructuring to format:
@param Expected Output: "Laptop: $1200, Phone: $800, Tablet: $600"
@param Example:
const products = [{ name: "Pen", cost: 2 }];
for (const { name, cost } of products) {
  console.log(`${name} costs $${cost}`);
}
 */
const orders = [
  { item: "Laptop", price: 1200 },
  { item: "Phone", price: 800 },
  { item: "Tablet", price: 600 },
];

function summarizeOrders(arr) {
  //Solution
  let orderSummary = [];
  for (const { item, price } of arr) {
    orderSummary.push(`${item}: $${price}`);
  }
  return orderSummary.join(", ");
}

console.log(summarizeOrders(orders));
