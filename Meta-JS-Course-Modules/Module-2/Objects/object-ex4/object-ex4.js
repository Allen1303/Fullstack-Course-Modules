// Exercise 4: Object Methods & Property Access
// Context:
// - Practice creating an object with properties and a method
// - Use a function with parameter destructuring to access object properties
// Hints:
// Example: function showResult({prop1, prop2}) { ... }

// --- Write your solution below ---

// 3. Use document.getElementById to get input values
const prop_1 = document.getElementById("prop1Input");
const prop_2 = document.getElementById("prop2Input");
const methodBtn = document.getElementById("callMethodBtn");
const result = document.getElementById("methodResult")

// 2. Use a function like function showResult({prop1, prop2}) { ... }
const displayObjResult = function ({ prop_1, prop_2 }) {
  // Base case for empty input fields
  if (prop_1 === "" || prop_2 === "") {
    result.innerHTML = prompt("⚠️ No input!, enter a valid input");
    return;
  }
// 1. Create an object with two properties and a method (e.g., combine or compare the properties)
  const mainObj = {
    prop_1,
    prop_2,
    objMethod() {
      return this.prop_1 === this.prop_2
        ? this.prop_1
        : `${this.prop_1} ${this.prop_2}`;
    },
  };

// 4. Call the object's method and display the result in the UI
  result.innerHTML = mainObj.objMethod();
};
// 5. Use a function to handle the button click
methodBtn.addEventListener("click", function () {
  displayObjResult({ prop_1: prop_1.value, prop_2: prop_2.value });
});
