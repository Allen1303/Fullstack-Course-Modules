"use strict";
const button = document.getElementById("generateBtn");
const ul_element = document.getElementById("receiptList");
const receipt_total = document.getElementById("receipt-total");
const current_date = document.getElementById("currentDate");
const current_time = document.getElementById("currentTime");

const items = [
  { name: "Apples", price: 2.5 },
  { name: "Bread", price: 3.0 },
  { name: "Milk", price: 2.25 },
  { name: "Eggs", price: 1.75 },
  { name: "Coffee", price: 4.99 },
];
button.addEventListener("click", () => {

const receipt_date = new Date();
current_date.textContent = receipt_date.toLocaleDateString();
current_time.textContent = receipt_date.toLocaleTimeString();
  ul_element.innerHTML = "";
  
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const list_element = document.createElement("li");

    const item_name = document.createElement("span");
    item_name.className = "item-name";
    item_name.textContent = `Item ${i + 1}: ${item.name}`;

    const item_price = document.createElement("span");
    item_price.className = "item-price";
    item_price.textContent = ` $${item.price.toFixed(2)}`;

    list_element.appendChild(item_name);
    list_element.appendChild(item_price);
    ul_element.appendChild(list_element);
    total += item.price;
    const current_item = `Item ${i + 1}: ${item.name} - ${item.price.toFixed(
      2
    )}`;
    console.log(current_item);
  }
  //Add Total price
  if (receipt_total) {
    // total_price.textContent = `TOTAL$${total.toFixed(2)}`;
    receipt_total.innerHTML = `<span>TOTAL</span><span>$${total.toFixed(2)}</span>`;
  }
});
