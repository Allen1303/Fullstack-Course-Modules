// Exercise 1: Simple Profile Object
// Context:
// - Practice creating an object from user input (name and age)
// - Store the object in a variable and display it in the UI
// Hints:
// 1. Use document.getElementById to get input values
// 2. Create an object with properties for name and age
// 3. Display the object as a string in the result area
// 4. Use a function to handle the button click (try an anonymous function)
// Example: const showProfile = function() { ... }

// --- Write your solution below ---
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const profileBtn = document.getElementById("profileBtn");
const clearBtn = document.getElementById("clearBtn");
const profileResult = document.getElementById("profileResult");

//Empty Object declaration to accept dynamic inputs
const profile = {};

const showProfile = function () {
  profile.name = nameInput.value;
  profile.age = ageInput.value ? Number(ageInput.value) : "";
  const result = `Name: ${profile.name}, Age: ${profile["age"]}`;
  profileResult.textContent = result;
  console.log(result);
};

//Function to c;ear all inputs
const clearProfile = () => {
  profile.name = "";
  profile.age = "";
  profileResult.textContent = "";
};
profileBtn.addEventListener("click", showProfile);
clearBtn.addEventListener("click", clearProfile);
