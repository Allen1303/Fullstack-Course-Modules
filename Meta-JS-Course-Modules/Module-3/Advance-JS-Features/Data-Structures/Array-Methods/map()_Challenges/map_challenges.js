"use strict";
/**
 * @param { 1. Map: Email List Generator }
Intro:
Apps often need to extract email addresses from user data for mailing lists or notifications. map() is perfect for transforming complex data into a single field.

@param Instructions:
Write a function that extracts only the email addresses from an array of user objects.
 */
const users = [
  { name: "Dee", email: "dee@email.com" },
  { name: "Jay", email: "jay@email.com" },
];

function extractEmails(arr) {
  //Solution
  return arr.map((user) => user.email);
}
console.log( "Challenge 1 output->", extractEmails(users));

/**
 * @param { 2. Map: Add Full Names }
@param Intro: When storing user data, names may be saved in separate fields. Use map() to combine firstName and lastName into a new fullName property.

@param Instructions:
Transform an array of user objects into a new array of full name strings.
 */
const people = [
  { firstName: "Ada", lastName: "Lovelace" },
  { firstName: "Alan", lastName: "Turing" },
];

function getFullNames(arr) {
  //Solution
  return arr.map(
    (person) => `FullName: ${person.firstName} ${person.lastName}`
  );
}
console.log( "Challenge 2 output->", getFullNames(people));

/**
 * @param { 3. Map: Price Formatting }
@param Intro: E-commerce apps display prices in user-friendly currency formats. You can use map() to convert raw prices into strings like $29.99.

@param Syntax Snippet:
const numbers = [1.5, 2.99];
const formatted = numbers.map(n => `$${n.toFixed(2)}`);

@param Instructions: Given an array of products with numeric price, return an array of formatted price strings.
 */
const cart = [
  { item: "Pen", price: 1.5 },
  { item: "Notebook", price: 3.75 },
];

function formatPrices(arr) {
  //Solution
  return arr.map((product) => `$${product.price.toFixed(2)}`);
}
console.log("Challenge 3 output->", formatPrices(cart));