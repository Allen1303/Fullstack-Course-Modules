"use strict";
/**
 * @param {🧠 Challenge 1: Basic Object Iteration }
Objective: Loop through an object and log each key and its value.
 * const user = { name: "Alice", age: 25, active: true };

for (const key in user) {
  console.log(key, user[key]);
}
 Output: ame Alice ge 25  active true
 */

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
};

function logBookDetails(obj) {
  // Your code here
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
// Log each book property and its value
logBookDetails(book);
/**
 * @param {🧠 Challenge 2: Count Boolean Values }
Objective: Count how many properties in an object are true.
 */
const taskStatus = {
  task1: true,
  task2: false,
  task3: true,
  task4: false,
  task5: true,
};

function countCompletedTasks(obj) {
  // Your code here
  let boolean_count = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === true) {
        boolean_count++;
      }
    }
  }
  return boolean_count;
}
console.log(countCompletedTasks(taskStatus)); // Output should be 3

/**
 * @param { 🧠 Challenge 3: Copy Only String Values }
Objective: Create a new object that only includes properties with string values
Output Should return: { name: "Allen", profession: "Developer" }
 */
const mixedData = {
  name: "Allen",
  age: 30,
  isStudent: false,
  profession: "Developer",
};

function filterStrings(obj) {
  //solution
  const result = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const element = obj[key];
      if (typeof element === "string") {
        result[key] = element;
      }
    }
  }
  return result;
}
console.log(filterStrings(mixedData));

/**
 * @param { 🧠 Challenge 4: Transform Values }
Objective: Create a new object with all numeric values doubled.
Output Should return: { laptop: 2000, phone: 1000, tablet: 1600 }
 */
const productPrices = {
  laptop: 1000,
  phone: 500,
  tablet: 800,
  charger: "not available",
};

function doublePrices(obj) {
  // Solution code here
  const double_price = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      double_price[key] = obj[key] * 2;
    }
  }
  return double_price;
}
console.log(doublePrices(productPrices));

/**
 *@param { 🧠 Challenge 5: Generate Summary Report }
Objective: Generate a formatted summary string from an object.
Expected  Output: "name: Jessica, role: Admin, lastLogin: 2025-07-21"
 */
const userInfo = {
  name: "Jessica",
  role: "Admin",
  lastLogin: "2025-07-21",
};

function generateReport(obj) {
  // Solution code here
  let objSummary = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
     objSummary.push( `${key}: ${value}`);

    }
  }
  //join the result in a string separated by a comma]
  return objSummary.join(", ")
}
console.log(generateReport(userInfo));
/** */
