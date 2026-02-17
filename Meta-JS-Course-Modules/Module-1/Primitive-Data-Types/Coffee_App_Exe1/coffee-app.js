"use strict";

/**
 * Data Type Summary Used in This App:
 * 
 * Number  – Used for mathematical operations (e.g., price * quantity).
 *           Retrieved using .valueAsNumber from input fields.
 * 
 * String  – Used when displaying the result (e.g., totalPrice.toFixed(2) returns a string).
 *           Also used in DOM updates via .textContent.
 * 
 * Boolean – Implicitly used when handling events (e.g., button click triggers logic).
 *           The click event evaluates to true when activated.
 * 
 * Variable – Used to store and manage values like price, quantity, and totalPrice.
 */

// 🔹 Select input elements and output display from the DOM
const priceInput = document.getElementById("priceInput");
const qtyInput = document.getElementById("qtyInput");
const calcButton = document.getElementById("calcBtn");
const totalOutput = document.getElementById("totalOutput");

// 🔹 Add a click event listener to the "Calculate" button
calcButton.addEventListener("click", () => {
  
  // 🧮 Get numeric values from input fields
  // .valueAsNumber returns a Number type directly (no need for parseFloat())
  const price = priceInput.valueAsNumber;
  const quantity = qtyInput.valueAsNumber;

  // 💲 Multiply price by quantity to get the total
  const totalPrice = price * quantity;

  // 🖥️ Display the total in the UI with 2 decimal places (e.g., 7.00)
  // toFixed() converts the number to a string with fixed decimal formatting
  totalOutput.textContent = totalPrice.toFixed(2);
});
