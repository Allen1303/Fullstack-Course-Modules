// EXERCISE 1: JSON Parser with Try-Catch Error Handling
// =======================================================

/* 
🎯 LEARNING GOALS:
- Understand when and why JSON.parse() throws errors
- Practice using try-catch blocks for synchronous error handling
- Learn to differentiate between different types of errors
- Implement user-friendly error messages
*/

/* 
📚 CONTEXT FROM META PROGRAMMING COURSE:
- JSON.parse() is a built-in method that can throw a SyntaxError
- Try-catch blocks allow you to handle errors gracefully
- The 'error' object contains useful information like .message and .name
- instanceof can help you identify specific error types
*/

// Hints:
// - Use JSON.stringify(parsed, null, 2) to display JSON in a readable, indented format.
// - Use error instanceof SyntaxError to specifically catch JSON parsing errors.
// - Always check for empty input before attempting to parse.
// - Update the result element's class to reflect success or error for clear user feedback.
// - Use a finally block for actions that should always run, like refocusing the input.

// 🚀 Implement the parseJSON() function
// =====================================
// This function parses the JSON input and handles errors gracefully.
// Steps:
// 1. Get the value from the textarea (id="jsonInput").
// 2. If the input is empty, display a user-friendly error message and stop.
// 3. Try to parse the input using JSON.parse().
//    - If parsing succeeds, display the parsed object/array in a readable format.
//    - If a SyntaxError occurs, display a clear error message for invalid JSON.
//    - For any other errors, display a generic error message.
// 4. Always refocus the input area after handling (success or error).

// Test samples for your practice
const testSamples = {
  valid1: '{"name": "Alice", "age": 25, "isStudent": true}',
  valid2: '[{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]',
  invalid2: '{"name": "Charlie", "age": 35,}', // Trailing comma (invalid JSON)
  invalid3: "This is not JSON at all!",
  empty: "",
};

const jsonInput = document.getElementById("jsonInput");
const jsonResult = document.getElementById("jsonResult");

// Function to set sample data in the textarea for testing
// ------------------------------------------------------
// Loads a sample JSON string into the input area for quick testing.
function setSample(sampleKey) {
  jsonInput.value = testSamples[sampleKey];
  jsonInput.focus();
}
const parseJSON = () => {
  // TODO: Implement your solution here following the steps above.
  try {
    if (!jsonInput.value.trim()) {
      throw new Error("⚠️ Input is empty! Enter JSON to parse.");
    }
    const parseData = JSON.parse(jsonInput.value);
    jsonResult.innerHTML = JSON.stringify(parseData, null, 2);
    jsonResult.className = "jsonp2-result jsonp2-success";
  } catch (error) {
    if (error instanceof SyntaxError) {
      jsonResult.innerHTML = `Invalid JSON: ${error.message}`;
      jsonResult.className = "jsonp2-result jsonp2-error";
    } else {
      jsonResult.innerHTML = `Error: ${error.message}`;
      jsonResult.className = "jsonp2-result jsonp2-error";
    }
  } finally {
    // Always refocus for user convenience.”
    jsonInput.focus();
  }
};
