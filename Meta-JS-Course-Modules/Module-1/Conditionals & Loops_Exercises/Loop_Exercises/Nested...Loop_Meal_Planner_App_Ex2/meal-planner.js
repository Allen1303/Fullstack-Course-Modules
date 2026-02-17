"use strict";
//Create references to the Generate Plan button.
const generateBtn = document.getElementById("generateBtn");
//Create a reference to the container where the meal plan will be displayed.
const mealPlanContainer = document.getElementById("mealPlanContainer");

//Sample Test Data
const weeklyMeals = [
  { day: "Monday", meals: ["Oatmeal & Eggs", "Grilled Cheese Sandwich", "Chicken Stir Fry"] },
  { day: "Tuesday", meals: ["Pancakes", "Soup", "Beef Tacos"] },
  { day: "Wednesday", meals: ["Smoothie", "Salad", "Spaghetti"] },
  { day: "Thursday", meals: ["Bagel", "Sushi", "Curry Chicken"] },
  { day: "Friday", meals: ["Waffles", "Burrito", "Pizza"] },
  { day: "Saturday", meals: ["Eggs & Toast", "Burger", "BBQ Ribs"] },
  { day: "Sunday", meals: ["French Toast", "Chicken Wrap", "Lasagna"] },
];

generateBtn.addEventListener("click", () => {
  mealPlanContainer.innerHTML = ""; //clear existing plan
  //Main loop to handle iteration of each day
  for (let i = 0; i < weeklyMeals.length; i++) {
    const dayData = weeklyMeals[i];
    //Wrapper Element for days
    const daySection = document.createElement("div");
    daySection.className = "day-section";
    //Create a title element (e.g., h2) showing the day's name.
    const dayHeader = document.createElement("h3");
    dayHeader.textContent = dayData.day;
    daySection.appendChild(dayHeader);
    //Create a list (ul) for the meals.
    const mealList = document.createElement("ul");
    //Use a nested loop to go through that day’s meals array.
    for (let j = 0; j < dayData.meals.length; j++) {
      const mealItem = document.createElement("li");
      //For each meal, create a li and append it to the ul element (list).
      mealItem.textContent = dayData.meals[j];
      mealList.appendChild(mealItem);
      //Append the list to the wrapper, then
    }
    //append the wrapper to the main container.
    daySection.appendChild(mealList);
    mealPlanContainer.appendChild(daySection);
  }
});
