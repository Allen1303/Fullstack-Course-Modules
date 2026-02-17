"use strict";
/**
 *@param { 🧩 Challenge 4: Format and Display Transaction Logs }
  🗂️ Real-World Context:
Banking and finance dashboards often loop through transaction logs (credits and debits) to display them in a formatted list. Understanding how to loop through arrays of objects and dynamically generate HTML is a key skill for real-time dashboards.
@Example Syntax
const transactions = [
  { type: "credit", amount: 250 },
  { type: "debit", amount: -75 },
];
for (const txn of transactions) {
  console.log(`${txn.type.toUpperCase()}: $${txn.amount}`);
}
  @param 📝 Task:
You are given an array of transaction objects.
Each transaction has:
a description (e.g. "Grocery Shopping"),
a type (either "credit" or "debit"),
and an amount (a number).
Loop through the array using a for...of loop.
Generate and insert an <li> item for each transaction into the <ul id="transactionList">.
Format each list item as:
Grocery Shopping - DEBIT: $-75
Bonus: Use a different CSS class or style (e.g. color) for debit vs credit items.
 */
const transactions = [
  {
    description: "Grocery Shopping",
    type: "debit",
    amount: -75,
  },

  {
    description: "Freelance Payment",
    type: "credit",
    amount: 300,
  },

  {
    description: "Internet Bill",
    type: "debit",
    amount: -50,
  },
];
const displayTransactons = () => {
  const ulList = document.getElementById("transactionList");
  ulList.innerHTML = "";
  for (const transaction of transactions) {
    //Destructuring for accessing the properties of our object in a cleaner/simpler way
    const { description, type, amount } = transaction;
    const li = document.createElement("li");
    li.textContent = `${description} - ${type.toUpperCase()}: $${amount}`;

    type === "debit" ? li.classList.add("debit") : li.classList.add("credit");

    ulList.appendChild(li);

    //test case
    console.log(`${description} - $${type.toUpperCase()}: $${amount}`);
  }
};
