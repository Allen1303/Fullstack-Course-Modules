"use strict";
/**
 * @param { Unit Test Password Strength Checker with UI }
 */

//Password Strength Check Logic
const passwordCheck = (password) => {
  if (!password || typeof password !== "string") {
    return "No password entered";
  } else if (password.length < 4) {
    return "Weak password";
  } else if (password.length <= 7) {
    return "Medium password!";
  } else {
    return "Strong password!";
  }
};
passwordCheck("abcdef");

//DOM Elements
const passwordInput = document.getElementById("passwordInput");
const strengthDisplay = document.getElementById("passwordStrength");

//Debounce function (Optional for Improve performance)
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//Debounce Validation function
const debouncePassword = debounce((password) => {
  const result = passwordCheck(password);
  strengthDisplay.textContent = result;
  strengthDisplay.style.display = "block";

  //Optional UI Styling
  if (result.includes("Strong")) {
    strengthDisplay.style.color = "green";
  } else if (result.includes("Medium")) {
    strengthDisplay.style.color = "orange";
  } else {
    strengthDisplay.style.color = "red";
  }
}, 300);

//Event Listener Using Debounce function
passwordInput.addEventListener("input", (event) => {
  const password = event.target.value.trim();
  debouncePassword(password);
});
module.exports = { passwordCheck };
