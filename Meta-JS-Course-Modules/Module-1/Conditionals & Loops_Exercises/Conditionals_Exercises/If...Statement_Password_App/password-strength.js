"use strict";
const password_input = document.getElementById("passwordInput");
const check_button = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");

check_button.addEventListener("click", () => {
  const input = password_input.value.trim();
  //conditional logic
  if (input.length === 0) {
    feedback.textContent = "Please enter a password";
    return;
  }
  if (input.length < 5) {
    feedback.textContent = "Weak!, ❌ password too short";

    feedback.classList.add("weak");

  } else if (input.length < 7) {
    feedback.textContent = "Medium strength password ⚠️ ️";
    feedback.classList.add("medium");
  }else{
    feedback.textContent = 'Strong password! ✅'
    feedback.classList.add("strong")
  }
});
