"use strict";
/**
*@param { ✅ Challenge 1: Create a Basic Class }
Objective: Learn how to define a class and instantiate an object.

 @param Task  Define a class called `Person` with a constructor that accepts a `name` and `age`.
Create an instance named `john` with name `"John Doe"` and age `30`.
 */

class Person {
  // Solution code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("John Doe", 30);

// Test
console.log(john.name);
console.log(john.age);

/**
 *@param { ✅ Challenge 2: Add Methods to a Class }
Objective: Learn how to add instance methods.

 @param Task  Extend the `Person` class by adding a method `greet()`
 that returns: "Hello, my name is [name]"
 **/

class Person1 {
  constructor(name) {
    this.name = name;
  }

  // Solution Your method here
  greet() {
    return `Hello my name is ${this.name}`;
  }
}

// Test
const alice = new Person1("Alice");
console.log(alice.greet());

/**
 * @param { ✅ Challenge 3: Use Getters and Setters }
Objective: Learn how to use encapsulation via get and set.

@param Task  Create a `BankAccount` class with a private `_balance` property.
 Add `get balance()` and `set balance(value)` to safely access it.

 @param class Breakdown:
 @param BankAccount = A generic form or template.
@param new BankAccount() = A filled-out form you can actually use.
@param class PremiumAccount extends BankAccount = A custom version of the form with extra sections or changes.
 */

class BankAccount {
  #balance = 0;
  constructor() {}
  // Add getter and setter here
  get balance() {
    return this.#balance;
  }
  set balance(value) {
    return typeof value === "number" && value >= 0
      ? (this.#balance = value)
      : console.error("Invalid balance amount");
  }
}
// Test
const acct = new BankAccount();
acct.balance = 500;
console.log(acct.balance); // Expected: 500

/**
 * @param {✅ Challenge 4: Inherit from a Parent Class}
  Objective: Understand class inheritance using extends and super.

@param Task 
 Create an `Animal` class with a method `speak()` returning "I make a sound."
 Create a `Dog` class that extends `Animal`
 Override the `speak()` method to return "Woof!" 
"[name] barks!"
 */

class Animal {
  // Solution code here
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "I make a sound";
  }
}

class Dog extends Animal {
  // Solution code here
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} barks Woof! `;
  }
}

// Test
const rex = new Dog("Rex");
console.log(rex.speak()); // Expected: "Woof!"

/**
@param ✅ Challenge 5: Simulate an Abstract Base Class
Objective: Practice Abstraction by designing a generic class that should not be directly instantiated.
 @Task   
Create a base class called Shape that contains a method getArea() which throws an error (as a placeholder for subclasses to implement).
Then create a Rectangle class that extends Shape and implements getArea() to return width * height.
 */
// ✅ Your Code Here
class Shape {
  constructor(width, height) {
    this.width = width; this.height = height;
  }

  getArea() {
    return console.error("getArea() Method, must be implemented in subclass!");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    // Initialize width and height
    super(width, height)
  }

  getArea() {
    // Return calculated area
    return this.width * this.height;
  }
}

// ✅ Test
const box = new Rectangle(5, 4);
console.log(box.getArea()); // Expected: 20
