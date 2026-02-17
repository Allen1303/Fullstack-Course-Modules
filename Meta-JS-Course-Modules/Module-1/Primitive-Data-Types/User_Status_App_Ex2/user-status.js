"use strict";

/**
 * =========================
 * ✅ User Status Toggle App
 * =========================
 *
 * This mini app practices core JavaScript concepts from Module 1:
 *
 * 🔹 Boolean:
 *    - `let isOnline = false` initializes the status.
 *    - Status is toggled using `isOnline = !isOnline`.
 *
 * 🔹 NOT Operator (`!`):
 *    - Flips the Boolean value when the button is clicked.
 *
 * 🔹 Ternary Operator:
 *    - Used to conditionally render different strings in the UI based on `isOnline`.
 *    - Syntax: `condition ? valueIfTrue : valueIfFalse`
 *
 * 🔹 Template Literals:
 *    - Used to dynamically insert values into strings using `${}`.
 *
 * 🔹 DOM Manipulation:
 *    - `.textContent` updates the status message and button text.
 */

const status_display = document.getElementById("statusDisplay");
const toggle_button = document.getElementById("toggleBtn");
const connection_dot = document.getElementById("connectionDot");
const network_waves = document.getElementById("networkWaves");

let isOnline = false; //use of Boolean

toggle_button.addEventListener("click", () => {
  isOnline = !isOnline; // NOT operator toggles the Boolean value

  // Update the UI text based on current Boolean value using template literals + ternary
  status_display.textContent = `Status: ${
    isOnline ? "Online 🟢" : "Offline 🔴"
  }`;
  toggle_button.textContent = `Status: ${isOnline ? "Online" : "Offline"}`;

  // Update visual indicators
  if (isOnline) {
    status_display.className = "status-online";
    connection_dot.className = "connection-indicator online";
    network_waves.className = "network-waves show";
  } else {
    status_display.className = "status-offline";
    connection_dot.className = "connection-indicator";
    network_waves.className = "network-waves";
  }
});
