"use strict";
/**
 * @param { Unit Test Email Validation With Interactivity }
 */
//Main Logic for validating emails
const isValidEmail = (email) => {
  if (!email || typeof email !== "string") return false;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};
console.log(isValidEmail("ze@fijetobir.es"));

function validateEmail() {
  const emailInput = document.getElementById("emailInput").value.trim();
  const isValid = isValidEmail(emailInput);
  const messageElement = document.getElementById("emailError");
  if (isValid) {
    messageElement.textContent = "";
    messageElement.classList.remove("error")
  } else {
    messageElement.textContent = `Invalid email!`;
    messageElement.classList.add("error");
  messageElement.style.display = "block"
  }
}

module.exports = { isValidEmail, validateEmail };
