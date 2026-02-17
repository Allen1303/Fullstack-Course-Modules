// Exercise 3: Math Object Practice
// Context:
// - Practice using JavaScript's built-in Math object for calculations
// - Use functions with parameters to process input and display results

// Challenge:
// 3. Write a function to find the minimum and maximum from a comma-separated list of numbers entered by the user.
// 4. Use Math methods: Math.random(), Math.round(), Math.min(), Math.max().
// 5. Use document.getElementById to get input values and update the UI.
// 6. Use functions with parameters for each operation, e.g. roundNumber(num), findMin(arr).
// 7. Use event listeners for button clicks to trigger your functions.
// Example: function roundNumber(value) { ... }

// --- Write your solution below ---

const randomBtn = document.getElementById("randomBtn");
const roundInput = document.getElementById("roundInput");
const roundBtn = document.getElementById("roundBtn");
const listInput = document.getElementById("listInput");
const minBtn = document.getElementById("minBtn");
const maxBtn = document.getElementById("maxBtn");
const mathResult = document.getElementById("mathResult");

//Step 1: Generate 3 random numbers and display them (comma-separated) in the round input field when the random button is clicked..
randomBtn.addEventListener("click", function () {
  let numberArr = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = (Math.random() * 100).toFixed(2);

    numberArr.push(randomNumber);
  }
  roundInput.value = numberArr.join(", ");
});

// 2. Write a function to round a user-entered decimal number and display the result.
roundBtn.addEventListener("click", () => {
  let values = roundInput.value.split(",").map((value) => Number(value.trim()));
  let roundedNumber = values.map((num) => Math.round(num));
  mathResult.textContent = `Rounded: ${roundedNumber.join(", ")}`;
  listInput.value = roundedNumber.join(", ");
});
minBtn.addEventListener("click", () => {
  let values = listInput.value.split(",").map((value) => Number(value.trim()));
  let minNumber = Math.min(...values);
  mathResult.innerHTML = `The lowest number is: <strong style="color: red";>${minNumber}</strong>`;
});
maxBtn.addEventListener("click", () => {
  let values = listInput.value.split(",").map((value) => Number(value.trim()));
  let maxNumber = Math.max(...values);
  mathResult.innerHTML = `The highest number is: <strong style="color: blue";>${maxNumber}</strong>`;
});
