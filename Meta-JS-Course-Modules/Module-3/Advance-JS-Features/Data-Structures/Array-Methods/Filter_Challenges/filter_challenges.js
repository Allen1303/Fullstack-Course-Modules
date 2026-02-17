"use strict";
/**
 * @param { 1. Filter: Active Subscribers Only }
Intro:
Web apps often manage lists of users with different statuses. filter() can help extract only those that meet a certain condition — such as active subscribers.

Instructions:
Write a function that takes in an array of user objects and returns only those with an isActive property set to true.
 */
const users = [
  { name: "Aliyah", isActive: true },
  { name: "Derek", isActive: false },
  { name: "Hana", isActive: true },
];

function getActiveUsers(arr) {
  // Your code here
  return arr.filter((user) => user.isActive === true);
 
}
console.log(" Challenge 1 output->", getActiveUsers(users));
// Expected: [{name: "Aliyah", isActive: true}, {name: "Hana", isActive: true}]

/**
 * @param { 2. Filter: Out-of-Stock Products }
Intro: E-commerce platforms use inventory systems to display only items available for sale. You can use filter() to remove out-of-stock items from a catalog.

Instructions:
Write a function that takes an array of product objects and returns only the products with inStock: true.
 */
const products = [
  { name: "Laptop", inStock: false },
  { name: "Mouse", inStock: true },
  { name: "Monitor", inStock: true },
];

function getAvailableProducts(arr) {
  // Your code here
return  arr.filter(product => product.inStock === true)
}
console.log("Challenge 2 output->", getAvailableProducts(products));

/**
 * @param { 3. Filter: High Achieving Students }
@param Intro: Academic dashboards often display students above a certain grade threshold. filter() is ideal for this scenario.

@Syntax Snippet:
const numbers = [2, 10, 15, 3];
const greaterThanFive = numbers.filter(n => n > 5);
@param Instructions:
Write a function that filters students with a grade above or equal to 85.
 */
const students = [
  { name: "Cam", grade: 90 },
  { name: "Jo", grade: 80 },
  { name: "Zee", grade: 88 },
];

function getHonorRoll(arr) {
//Solution
return arr.filter(student => student.grade >= 85)
}
console.log("Challenge 3 output->", getHonorRoll(students));