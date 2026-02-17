"use strict";
/**
 * @param { 1. Reduce: Total Cart Price }
@param Intro:
In shopping carts, you often need to calculate the total cost. reduce() is great for aggregating numbers across an array.
@Syntax array.reduce((accumulator, currentValue, currentIndex, array) => {
  // return new accumulator value
}, initialValue)
@param Instructions:
Given an array of products with prices, calculate the total sum.
 */
const cart = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
];

function calculateTotal(arr) {
  //Solution
  return arr.reduce((acc, current) => acc + current.price, 0);
}
console.log("Challenge 1 output->", calculateTotal(cart));

/**
 * @param { 2. Reduce: Word Count Tracker }
@param Intro: reduce() can be used for text processing, like tracking how often each word appears.

@Syntax example:
const fruits = ["apple", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
 * 
@param Instructions:
Create a function that counts how many times each word appears in an array.
 */
const words = ["yes", "no", "yes", "maybe", "no"];

function wordFrequency(arr) {
  //Solution
  return arr.reduce((acc, word) => {
   // This line uses the current word as a key, increments its count (starting from 0 if new). 
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}
console.log("Challenge 2 output->", wordFrequency(words));

/**
 * @param { 3. Reduce: Merge Object Properties }
@param Intro: Sometimes, you need to merge multiple objects into one — like combining form inputs or API payloads. reduce() helps consolidate them.

@param Instructions: Given an array of objects, return one object containing all key-value pairs.
 */
const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

function mergeObjects(arr) {
  //Solution
  return arr.reduce((acc, item) => {
    return {...acc, ...item};
  }, {});
}
console.log("Challenge 3 output->", mergeObjects(arr));