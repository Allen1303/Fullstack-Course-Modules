"use strict";
const startBtn = document.getElementById("start");
const instructionOutput = document.getElementById("instructionBox");
//Array of Instructions to display to the user
let arrayOfInstructions = [
  "Step 1: Open your editor.",
  "Step 2: Write your HTML structure.",
  "Step 3: Style using CSS.",
  "Step 4: Add interactivity with JavaScript.",
  "Step 5: Test and debug your code.",
  "Step 6: Celebrate your progress! 🎉",
];
// Recursive function with set timeout to display instructions
const showInstructions = (index = 0) => {
  if (index >= arrayOfInstructions.length) return;
  instructionOutput.textContent = arrayOfInstructions[index];
  setTimeout(() => {
    showInstructions(index + 1);
  }, 2000);
};
startBtn.addEventListener("click", () => {
  showInstructions();
});
