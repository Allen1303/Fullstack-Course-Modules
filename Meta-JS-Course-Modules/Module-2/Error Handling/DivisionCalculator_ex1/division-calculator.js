// Instructions:
//
// Use the HTML and CSS files provided. Connect your JS file in the HTML with a <script> tag at the end of the body.

// Your code here:
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const resultEl = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn")

// 1. Write a function called safeDivision(a, b) that takes two inputs and returns the result of dividing a by b.
const safeDivision = function (a, b) {
  // 2. Use try/catch to handle the following errors:
  try {
    const num_1 = parseFloat(a);
    const num_2 = parseFloat(b);

    // - If either input is not a valid number, show an error message.
    if (isNaN(num_1) || isNaN(num_2)) {
      throw new Error("⚠️ Please enter valid numbers only!");

      // - If the second input (b) is zero, show an error message for division by zero.
    } else if (num_2 === 0) {
      throw new Error("⚠️ Cannot divide by zero (0)!");

      // - If either input is empty, show an error message to fill both fields.
    } else if (a === "" || b === "") {
      throw new Error("⚠️ Please fill in both input fields!");
    }
    const division = num_1 / num_2;
    return {
      success: true,
      division: division,
      message: `${num_1} ÷ ${num_2} = ${division}`,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: `Error: ${error.message}`,
    };
  }
};
// 4. Add support for pressing Enter to trigger the calculation.
const performDivision = function () {
  input1.value;
  input2.value;
  const result = safeDivision(input1.value, input2.value);
  if (result.success) {
    resultEl.className = "result success";
    resultEl.textContent = result.message;
  } else {
    resultEl.className = "result error";
    resultEl.textContent = result.message;
  }
};
calculateBtn.addEventListener("click", performDivision)
input1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") performDivision();
});
input2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") performDivision();
});
