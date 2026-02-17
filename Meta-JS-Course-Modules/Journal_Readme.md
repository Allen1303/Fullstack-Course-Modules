# Module 1: Learning Journal

### Concepts Covered & Reflections for Week of June 16th 2025

This week, I explored the basics of JavaScript and gained a solid understanding of variables and primitive data types. I like to think of variables as little tentacles or name tags that hold (or point to) data values. This analogy helps me remember that variables reach out and grab onto values in memory—sometimes holding the value directly (for primitives), and sometimes just pointing to it (for objects and arrays).

```js
let name = "Alice"; // string
let age = 25; // number
let isStudent = true; // boolean
```

I practiced using arithmetic operators to perform calculations. Addition, subtraction, multiplication, and division are all straightforward, but it's satisfying to see how they work in code:

```js
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
```

I also learned about converting strings to numbers, joining strings together, and finding out how many characters are in a string. These are useful when working with user input or displaying information:

```js
let strNum = "42";
let num = Number(strNum); // 42
let fullName = "Alice" + " " + "Smith"; // "Alice Smith"
let nameLength = fullName.length; // 11
```

Boolean logic was another key topic. I now understand how to use booleans for decision making, and how toggling a boolean value is a simple way to switch between two states, like turning something on or off:

```js
let isOn = false;
isOn = !isOn; // toggles to true
```

To reinforce these concepts, I built small UI exercises—like variable displays, calculators, string operations, and boolean toggles. Creating these mini-projects really helped me see how the concepts work in practice and made the learning process more engaging.

These foundational ideas are essential for writing clear and effective JavaScript code, and I'm excited to keep building on them as I continue the course.

---

### Concepts Covered & Reflections for Week of June 23rd 2025

This week, I focused on building interactive JavaScript apps using arrays, functions, and DOM manipulation.

**Key Takeaways:**

- Arrays, functions, and objects are the backbone of interactive JavaScript applications.
- Practicing DOM manipulation and event-driven programming is essential for building dynamic user interfaces.
- Input validation and user feedback greatly improve the user experience.
- Creating new objects inside functions ensures each entry in a collection is unique.
- Using array methods like `push`, `join`, `reduce`, and `shift` makes data management efficient and clear.
- Modular code and clear function structure help keep projects organized and maintainable.

**Mini Projects / UI Exercises Practiced:**

- My Numbers: Add, display, and sum user-entered numbers.
- My Shopping List: Add, show, and clear shopping items with dynamic feedback.
- Math Object Practice: Generate, round, and analyze random numbers.
- My Movie Collection: Add movies, display the list, and pick a random movie.
- My Tasks (To-Do List): Add, show, and remove tasks with real-time updates.
- Object Methods & Property Access: Create and use objects with methods and parameter destructuring.

---

#### Functions

- **Summary:** Functions are reusable blocks of code that perform specific tasks. They help organize code and make it modular.

```js
// Example: Declaring and using a function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

#### Arrays

- **Summary:** Arrays store collections of data. You can add, remove, and process items using array methods and loops.

```js
// Example: Creating and using an array
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // Add an item
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
```

```js
// Example: Using a for...loop to process an array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: cherry
// Fruit 4: orange
```

```js
// Example: Summing numbers in an array with a for...loop
let numbers = [2, 4, 6, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum); // Output: Sum: 20
```

#### Objects & Methods

- **Summary:** Objects group related data and functions (methods). Methods can use `this` to access object properties. Parameter destructuring makes code more readable.

```js
// Example from Exercise 4: Using function parameter destructuring with objects
function showResult({ prop_1, prop_2 }) {
  return prop_1 === prop_2 ? prop_1 : `${prop_1} ${prop_2}`;
}

const mainObj = {
  prop_1: "Hello",
  prop_2: "World",
};

console.log(showResult(mainObj)); // Output: "Hello World"
```

---

#### Practice: Mini Project Code Snippets

- **My Numbers:**
  - Store user input as numbers in an array, display dynamically, and sum values.

```js
let numbers = [2, 4, 6, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum); // Output: Sum: 20
```

- **My Shopping List:**
  - Add, show, and clear shopping items using an array and loops.

```js
let shoppingList = [];
shoppingList.push("Milk");
shoppingList.push("Eggs");
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`Item ${i + 1}: ${shoppingList[i]}`);
}
```

- **Math Object Practice:**
  - Generate random numbers, round them, and find min/max values.

```js
let randomNum = Math.random();
let rounded = Math.round(4.7);
let min = Math.min(1, 2, 3);
let max = Math.max(1, 2, 3);
console.log(randomNum, rounded, min, max);
```

- **My Movie Collection:**
  - Add movies, display the list, and pick a random movie.

```js
let movies = ["Inception", "Matrix", "Interstellar"];
movies.push("Arrival");
const randomIndex = Math.floor(Math.random() * movies.length);
const randomMovie = movies[randomIndex];
console.log(randomMovie);
```

- **My Tasks (To-Do List):**
  - Add, show, and remove tasks with real-time updates.

```js
let taskArr = [];
function addTask(task) {
  if (task === "") return;
  taskArr.push(task);
}
function showTasks() {
  for (let i = 0; i < taskArr.length; i++) {
    console.log(taskArr[i]);
  }
}
function removeTask() {
  taskArr.shift(); // removes the first task
}
```

- **Object Methods & Property Access:**
  - Create and use objects with methods and parameter destructuring.

```js
const booksArr = [];
function addBook(title, author, year) {
  const bookObj = {
    title,
    author,
    year,
  };
  booksArr.push(bookObj);
}
```

---

### Week of June 30

This week involved hands-on practice with core JavaScript patterns, including:

*   **Form Validation with `try...catch`:** Built a simple form validator to practice validating user input and handling potential issues (like empty fields or invalid formats) using the `try...catch` statement for structured error management.
    *   *Key Takeaway 1:* `try...catch` provides a clean way to separate code that *might* fail (validation logic) from the code that *handles* the failure.
    *   *Key Takeaway 2:* Using `throw new Error(...)` is an effective way to signal that a validation rule failed and immediately jump to the `catch` block to handle the specific error message.
    ```javascript
    function validate() {
      try {
        if (!input.value.trim()) throw new Error("Input required!");
        // ... other validation checks ...
        // Handle success
      } catch (error) {
        // Display error message
      }
    }
    ```

This week involved deep dive into building more **robust applications** by extensively applying **`try...catch`** for error handling across various features of a shopping cart:

*   **Shopping Cart Error Handling:** Focused on using `try...catch` to safely perform operations like adding/updating items (validating data, quantities), saving/loading the cart (`localStorage` availability, JSON parsing), calculating totals (checking data types), and handling form submissions and export actions.
    *   *Key Takeaway 1:* `try...catch` allows isolating code that might fail (e.g., accessing DOM, parsing JSON, validating input) and providing specific, user-friendly feedback in the `catch` block.
    *   *Key Takeaway 2:* Throwing custom `Error` objects within `try` with descriptive messages makes the `catch` block logic clearer and helps in debugging different failure scenarios within the same operation.
    ```javascript
    function safeOperation() {
      try {
        const data = getData();
        if (!data) throw new Error("Data not found!");
        process(data);
        // handle success
      } catch (error) {
        showMessage(`Operation failed: ${error.message}`, 'error');
      }
    }
    ```
    Okay, here is the updated journal summary for your `journal.md` file with the date "Week of July 7th".

```markdown
### Week of July 7th - Recursion (Timed Sequence Display)

Explored implementing a timed sequence display using **recursion**. A function calls itself repeatedly with a delayed `setTimeout`, progressing through an array of instructions until a base case (reaching the end of the array) is met.

*   *Key Takeaway 1:* Recursion provides an elegant way to handle sequential tasks, especially when combined with asynchronous operations like `setTimeout`.
*   *Key Takeaway 2:* Always define a clear base case (stop condition) to terminate recursive calls and prevent infinite loops.

```javascript
const showInstruction = (index = 0) => {
  if (index >= instructions.length) return; // Base case
  instructionOutput.textContent = instructions[index]; // Action
  setTimeout(() => {
    showInstruction(index + 1); // Recursive call
  }, 2000); // Delay
};
```
### 🗓️ Journal Summary – Week of July 7
📌 Exercise: Nested Comment Viewer
Built a mini app that renders a thread of nested comments using recursion and dynamic DOM manipulation.

✅ Concepts Practiced
Functions & Higher-Order Functions
Defined a reusable renderComments() function. Passed it to .forEach() → demonstrating HOF usage.

Recursion
Used recursion to handle an unknown depth of nested replies. Each comment renders itself, then its replies by calling the same function again.

Scope
Scoped DOM elements (li, ul) inside the function using const, keeping variables isolated per recursive call.

💡 Key Learnings
Recursion simplifies traversing deeply nested data structures.

Dynamically created elements need to be clearly appended at the correct DOM level (ul inside li).

Scope isolation avoids variable name collisions during recursive calls.

Data-driven UI rendering becomes more intuitive when functions and structure mirror the data shape.

## 🔁 Code Snippet
```js
function renderComments(commentObj, parentElement) {
  const li = document.createElement("li");
  li.textContent = `${commentObj.author}: ${commentObj.text}`;
  parentElement.appendChild(li);

  if (commentObj.replies?.length) {
    const ul = document.createElement("ul");
    li.appendChild(ul);
    commentObj.replies.forEach((reply) => renderComments(reply, ul));
  }
}

commentsData.forEach(comment => renderComments(comment, commentTree));
``` 
Absolutely! Here's a **concise, journal-friendly entry** for your Markdown file with a date heading, summary, and a small code snippet highlighting the core OOP concept used:

---
### 📆 Week of July 14

**🛒 Project:** E-Commerce Cart System
**🔁 Focus:** Practicing JavaScript Object-Oriented Programming (OOP)
---
#### 🧠 Summary
This week, I built a mini E-Commerce Cart System to deepen my understanding of the four core OOP principles in JavaScript. I practiced **Encapsulation** by using private class fields (e.g. `#price`, `#items`), applied **Abstraction** via public getters like `getPrice()` and `getTotal()`, and interacted with the DOM to simulate adding products to a cart. The exercise helped clarify how object instances can manage their own state and expose only the methods needed to external code.
---
#### 🔍 Highlight: Encapsulation in `Product` Class

```js
class Product {
  #price; // Encapsulated (private)
  constructor(id, name, category, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }

  getDetails() {
    return `${this.name}: $${this.#price}`;
  }
}
```
---
#### ✅ Key Concepts Reinforced

* Encapsulation using `#` for private class properties
* Clean abstraction using getter methods
* Event-driven UI rendering with modular functions
* DOM manipulation using JavaScript classes
---

Here's a well-structured **journal-style README entry** you can add to your markdown file. It includes a summary, a breakdown of what you practiced, and a focused code snippet that demonstrates the **4 core OOP concepts** in your Chat App project.

---

````markdown
## 📆 Week of July 21

### 💬 Project: Chat App (OOP Practice)
**Goal:** Practice and reinforce the 4 core principles of Object-Oriented Programming (OOP) — Encapsulation, Abstraction, Inheritance (not used but acknowledged), and Polymorphism — using a basic UI messaging system.

---

### 🧠 What I Practiced
- ✅ Defined and instantiated JavaScript classes (`User`, `Message`, `Chat`)
- ✅ Encapsulated user status using `#private` fields
- ✅ Created reusable methods for message handling and rendering
- ✅ Practiced DOM interaction tied to class behaviors
- ✅ Explored how to design a multi-object system without relying on inheritance
- ✅ Added small enhancements for UX like scroll-to-bottom and input clearing

---

### 🔍 OOP Concepts in Action

```js
// ✅ Encapsulation (private field for user status)
class User {
  #status;
  constructor(username, status) {
    this.username = username;
    this.#status = status;
  }
  get_status() {
    return this.#status;
  }

  // ✅ Polymorphism: send_message returns a different object (Message)
  send_message(text, recipient) {
    return new Message(this.username, recipient.username, text);
  }
}

// ✅ Abstraction: hides formatting details in a helper method
class Message {
  constructor(sender, recipient, text, timestamp = new Date().toLocaleTimeString()) {
    this.sender = sender;
    this.recipient = recipient;
    this.text = text;
    this.timestamp = timestamp;
  }
  get_formatted_message() {
    return `${this.timestamp}: ${this.sender} to ${this.recipient}: ${this.text}`;
  }
}

````
---

### 🗒️ Notes

* I now understand how **objects can interact** while respecting **clear responsibilities** (e.g. Users generate Messages, Chat stores them).
* This was a great transition from static logic to modular, extensible code.
* Learned how to connect OOP logic to actual HTML interactions in real-time apps.

---

### 📌 Next Steps

* Add support for reverse messages (John replying to Allen)
* Store and retrieve messages from localStorage
* Explore `ChatUI` class abstraction to decouple logic from rendering


## 🧠 JavaScript Looping & Destructuring Practice

### App: **Weekly Expense Tracker**

### Focus: `Destructuring`, `for...of`, and `for...in` loops

---

### 🚀 What I Practiced

#### 1️⃣ **Destructuring Form Inputs**

Instead of repeatedly accessing `form.elements[...]`, I destructured the values directly from the form:

```js
const { category, amount, day } = form.elements;
```

This made the submission handler much cleaner and easier to read.

---

#### 2️⃣ **`for...of` Loop with Destructuring**

Used to render the daily expense log by looping through the `expenses` array:

```js
for (const { day, category, amount } of expensesArr) {
  const liElement = document.createElement("li");
  liElement.textContent = `${day} - ${category}: $${amount.toFixed(2)}`;
  dailyLog.appendChild(liElement);
}
```

✅ Practiced destructuring inside the loop for direct property access.

---

#### 3️⃣ **`for...in` Loop for Summary by Category**

Built and displayed a summary of total amounts spent per category:

```js
for (const category in summary) {
  const liElement = document.createElement("li");
  liElement.textContent = `${category}: $${summary[category].toFixed(2)}`;
  categoryList.appendChild(liElement);
}
```

✅ Ideal use case for looping over object keys (categories).

---

### ✅ Takeaway

This project helped solidify **destructuring**, and clarified **when to use `for...of` (arrays)** vs **`for...in` (objects)** — crucial concepts for writing clean, modern JavaScript.

---

Here’s a clean and concise **README journal summary** entry titled **“Week of July 27th, 2025”**, including a brief overview of the concepts covered and a small representative code snippet for each major section:

---

## 📅 Week of July 27th, 2025

### 🔍 Focus Areas:

This week I deepened my understanding of key JavaScript data processing methods and modern syntax features:

* `filter()`, `map()`, and `reduce()` for data transformation
* Destructuring (object & array)
* Spread and Rest operators
* DOM manipulation through dynamic UI rendering

---

### 📌 Highlights

#### 1️⃣ **Filtering Data (Real-World Conditions)**

**Concepts:** `filter()` to select relevant users, products, or students based on criteria.

```js
const users = [
  { name: "Aliyah", isActive: true },
Let me know if you'd like a version with headings or markdown formatting for GitHub’s `README.md` file layout.
  { name: "Derek", isActive: false }
];
const getActiveUsers = users => users.filter(user => user.isActive);
```

---

#### 2️⃣ **Top-Rated Products + Average Price**

**Concepts:** `filter()`, `map()`, `reduce()`, and DOM rendering.

```js
const top = products.filter(p => p.rating >= 4.5);
const avg = top.reduce((sum, p) => sum + p.price, 0) / top.length;
```

---

#### 3️⃣ **Destructuring Assignments**

**Concepts:** Extracting nested properties & renaming.

```js
const HIGH_TEMPS = { today: 77, tomorrow: 80 };
const { today, tomorrow } = HIGH_TEMPS;
```

```js
const FORECAST = { today: { low: 64, high: 77 } };
const { today: { low: lowToday, high: highToday } } = FORECAST;
```

---

#### 4️⃣ **Rest & Spread Operators**

**Concepts:** Merge arrays and isolate lead vs team.

```js
const team = ["John", "Sarah", "Brett"];
const newMembers = ["Mike", "Austin"];
const all = [...team, ...newMembers];
const [lead, ...others] = all;
```

---

### ✅ Outcomes:

* Practiced filtering datasets based on real-life scenarios (e.g., user status, grades, stock).
* Dynamically rendered content using DOM and iteration.
* Built fluency in destructuring deeply nested data and using spread/rest syntax to manage arrays immutably.

---

### 🗓️ **Week of August 4th, 2025**

---

### 🧠 **What I Learned This Week**

This week was my first real hands-on experience combining **unit testing with DOM interactions** using **Jest** and **jsdom**.

* I learned how to **mock HTML elements** inside tests to simulate real browser behavior.
* Used `beforeEach()` to reset the DOM before each test — this helped prevent test interference.
* Practiced checking if DOM updates (like error messages) worked as expected using `expect()`.
* Discovered `@jest-environment jsdom` and how it lets me safely run DOM-related code in Node.
* Most importantly, I now understand how to test UI-based logic **in isolation** without relying on the actual browser.

---

### 🧪 **Sample Test I Wrote**

```js
/**
 * @jest-environment jsdom
 */
const { validateEmail } = require("./unit-testing");

describe("validateEmail", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="emailInput" />
      <span id="emailError" class="error"></span>
    `;
  });

  test("Should show error when email is invalid", () => {
    document.getElementById("emailInput").value = "Invalid email";
    validateEmail();
    expect(document.getElementById("emailError").textContent)
      .toBe("Please enter valid email");
  });
});
```
---
### 🧩 **How I Structured My Code for Testing**

I also learned that it's better to **split responsibilities** in my code:

* `validateEmail()` handles the logic (easy to test ✅).
* DOM elements and event listeners go in a separate `init()` function.
* I added `if (typeof window !== "undefined")` so the DOM code only runs in the browser — this stopped test errors.

---

### 🧪 **Testing Multiple Functions from One File**

I discovered I can export multiple UI helper functions from a single file and test only the ones I need:

#### `ui-helpers.js`

```js
function validateEmail() {}
function resetForm() {}
function formatDate() {}

module.exports = { validateEmail, resetForm, formatDate };
```

#### `ui-helpers.test.js`

```js
const { validateEmail } = require('./ui-helpers');

test('flags invalid email', () => {
  // test logic here
});
```
---
### 💡 **Final Takeaway**

> Writing testable code means keeping logic separate from UI setup.
> I can import everything but only test what I need — this keeps things modular and clean.

---

### 🧪 August 8th, 2025 – Testing Password Strength Logic

Today I **learned for the first time** how important it is to **separate logic from DOM events** in JavaScript — especially for testing features like a password strength checker.
---
#### 🧠 Key Lesson: Split Responsibilities
Trying to test everything in one function caused issues. I learned to **separate the logic (pure function)** from **event listener setup**, which made things much easier.

```javascript
// ✅ Logic (pure function – testable)
const passwordCheck = () => {
  const val = document.getElementById("passwordInput").value;
  const msg = document.getElementById("passwordStrength");

  if (val.length < 5) msg.textContent = "Weak password";
  else if (val.length < 7) msg.textContent = "Strength: Medium";
  else msg.textContent = "Strong: password";
};

// ✅ UI event setup
const initPasswordCheck = () => {
  document.getElementById("passwordInput")
    .addEventListener("input", passwordCheck);
};

// ✅ Only run in browser
if (typeof window !== "undefined") initPasswordCheck();
```
---
#### 🔍 Input Events vs Clicks

Input events need more careful simulation during tests:

```javascript
// ✅ Button click is simple
button.dispatchEvent(new Event('click'));

// ✅ Input requires simulating value + event
input.value = 'test123';
input.dispatchEvent(new Event('input'));
```
---
### 💡 Takeaway

* I **learned how to separate pure logic from UI setup**.
* **Pure functions** are easier to test (no DOM dependency).
* **`initPasswordCheck()`** handles DOM event setup.
* **Simulating input** is not the same as clicking a button.
* Adding `if (typeof window !== "undefined")` helps avoid test errors.
I learn that one of the ***best practices*** when writing test involving large or small applications is to separate `function()` concern, ***e.g.*** using one `function()` to handle the ***logic*** of the app and another to handle display and implementation of the `UI`. Doing this makes your `Unit test` easier to write since you do not have to implement `DOM` elements within your test and the test will be less fragile
**Example Code snippet**

```jsx
// Logic (pure function)
export function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

// UI
export function displayTotal(total) {
  document.querySelector('#total').textContent = `$${total}`;
}

// Event handler
document.querySelector('#calcBtn').addEventListener('click', () => {
  const prices = [10, 20, 30];
  const total = calculateTotal(prices);
  displayTotal(total);
});

```

I leant it’s best to use `objects` for clarity and ***maintainability***, and not `arrays` for storing structured data like tasks ***e.g.*** when creating function logic that we want to perform Unit Test on for something like a **Todo App**.

A key takeaway is while learning to do unit tests, I improved my understand of adding `object syntax` within functions ***e.g.***  `parentheses` around the curly braces (`({ ... })`) is just a shorter way to return an `object` directly and this tells `JavaScript` that the value inside the function should be treated as an  `Object` 

Example: **ES6** *shorthand for `object` properties (when `key` and `variable` name are the same):*

```jsx

const createTask = (text) => ({
  id: Date.now(), -> unique numeric ID (timestamp in ms)
  text,           -> shorthand for text: text
  completed: false -> initial completion state
});

```

- I also learnt that **matchers are just functions (methods)** that we call inside our tests to evaluate whether the **actual value** from our code matches the **expected value** we provided. and the two most versatile matchers are the toBe() and toEqual() methods

<aside>
💡

> **Be** for Basic values, **Equal** for Everything inside.
> 
- **`toBe()` →** Basic values & same reference
- **`toEqual()` →** Everything inside objects/arrays
</aside>

```jsx
test('toBe with primitives and references', () => {
  // Primitive check
  expect(2 + 2).toBe(4);

  // Reference identity check
  const obj = { a: 1 };
  const sameRef = obj;
  expect(sameRef).toBe(obj); // passes because same object in memory
});

```

```jsx
test('toEqual with objects and arrays', () => {
  // Object structure check
  expect({ name: 'Alice', age: 25 }).toEqual({ name: 'Alice', age: 25 });

  // Array content check
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

```