"use strict";

/**
 * @param Weekly Expense Tracker App
 *
 * @Concepts practiced:
 * - @Destructuring form values
 * - @Using for...in to summarize by category
 * - @Using for...of to render logs
 * - @DOM interaction & event handling
 */
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expense-form");
  const categoryList = document.getElementById("category-summary");
  const dailyLog = document.getElementById("daily-log");
  const resetBtn = document.getElementById("reset-btn");
  //2. declare expense array
  let expenses = [];
  //Handling form behavior on submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //Destructuring the values from the form
    const { category, amount, day } = form.elements;
    //Simple Validation using early return statement <- Optional
    if (!category.value || !amount.valueAsNumber || !day.value) {
      return alert("All fields are required!");
    }
    // Expense object for the destructured values
    const newExpense = {
      category: category.value,
      amount: amount.valueAsNumber,
      day: day.value,
    };
    //add all expense object values to the expense array
    expenses.push(newExpense);
    //test the expenses
    console.log(expenses);
    //Render and update the logs and summaries
    renderDailyLog(expenses);
    renderCategorySummary(expenses);

    //clear the form values with JS built in reset method()
    form.reset();
  });
  resetBtn.addEventListener("click", () => {
    expenses = [];
    form.reset();
  });
  /* ===========================
   🧩 Helper Functions
  =========================== */
  function renderDailyLog(expensesArr) {
    dailyLog.innerHTML = "";
    // Using a for of ...loop syntax with Destructuring to render daily expenses
    for (const { day, category, amount } of expensesArr) {
      const liElement = document.createElement("li");
      liElement.textContent = `${day} - ${category}: $${amount.toFixed(2)}`;
      dailyLog.appendChild(liElement);
      console.log(liElement);
    }
  }
  function renderCategorySummary(expensesArr) {
    //Summary object to hold the list of category with expense amounts
    const summary = {};

    // Using for of ...loop to build the summary logic and iterate
    for (const expense of expensesArr) {
      //Destructure the category input and the amount to be summed up
      const { category, amount } = expense;
      if (summary[category]) {
        summary[category] += amount;
      } else {
        summary[category] = amount;
      }
    }

    // Render the summary object using for in...loop
    categoryList.innerHTML = ""; //<- Clear existing data

    for (const category in summary) {
      const liElement = document.createElement("li");
      //Dynamically updated the category Summary
      liElement.textContent = `${category}: $${summary[category].toFixed(2)}`;
      categoryList.appendChild(liElement);
      console.log(liElement);
    }
  }
  //Reset button logic
  resetBtn.addEventListener("click", () => {
    expenses = [];//<- Clear the expense array
    form.reset();//<- Clear form fields (Optional)
    //<- Clear rendered logs and summaries
    dailyLog.innerHTML = "";
    categoryList.innerHTML = "";
  });
});
