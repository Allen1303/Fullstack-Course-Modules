// 📄 Form Validator with try...catch Practice
const message = document.getElementById("message");
const submitBtn = document.getElementById("formBtn");
function validateForm() {
  // Step 1: Get the input values and message element, Note: Declaring these inside the function ensures the latest input values are used on each submission.
  const name_input = document.getElementById("name");
  const email_input = document.getElementById("email");
  // Step 2: Create try block
  try {
    // Step 3: Add validation logic Check if name is empty, throw error if it is
    if (!name_input.value.trim()) {
      throw new Error("⚠️ Name is required!");
    }
    // - Check if email contains '@', throw error if it doesn't
    if (!email_input.value.includes("@")) {
      throw new Error("⚠️ Email must contain '@'.");
    }
    // Step 4:add success message if all validation pass. 
    message.textContent = "✅ Input successful!";
    message.className = "validation-result validation-success";
    // Step 5: Add catch block to handle errors
    name_input.value = "";
    email_input.value = "";
  } catch (error) {
    message.textContent = error.message;
    message.className = "validation-result validation-error";
  }
}
// Step 6: Add event listener to connect button to your function
submitBtn.addEventListener("click", validateForm);

// 🎯 Expected behavior:
// - Empty name should show: "❌ Name is required."
// - Email without '@' should show: "❌ Email must contain '@'."
// - Valid inputs should show: "✅ Form submitted successfully!"

// 🚀 Bonus challenges (optional):
// - Add validation for minimum name length
// - Check if email contains a dot after the @
// - Clear form inputs after successful submission
// - Add console.log statements to track validation attempts
