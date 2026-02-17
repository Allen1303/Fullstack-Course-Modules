"use strict";
/**
 * @param  { Challenge 1 : Top-Rated Products with Average Price }
 *@param Intro: Find Top Products and Calculate Average Price
You manage a product catalog and want to display only highly-rated items. Once filtered, you want to extract the names and calculate the average price of those products to display in the UI.

This exercise combines real-world use of filter() to isolate data, map() to extract relevant properties, and reduce() to calculate aggregate data — all shown in a practical product listing interface.
@param Instructions: Filter all products with a rating of 4.5 or higher.  Extract their name and price using map().  Calculate the average price of the filtered products using reduce().  Display the product names as a list and the average price below the list.
 */
document.getElementById("showProductBtn").addEventListener("click", () => {
  const ulList = document.getElementById("productList");
  const paragraph = document.getElementById("avgPrice");

  const products = [
    { name: "Phone", price: 599, rating: 4.7 },
    { name: "Laptop", price: 1299, rating: 4.2 },
    { name: "Headphones", price: 199, rating: 4.6 },
    { name: "Monitor", price: 299, rating: 4.8 },
    { name: "Keyboard", price: 99, rating: 4.1 },
  ];
  const topProducts = products
    .filter((product) => product.rating >= 4.5)
    .map((product) => ({ name: product.name, price: product.price }));
  const totalPrice = topProducts.reduce( (acc, product) => acc + product.price, 0);
  const avgPrice = totalPrice / topProducts.length;

  ulList.innerHTML = ""; //-> Clear previous entries
  //Loop over each Product to be displayed forEach applied here
  topProducts.forEach((product) => {
    //Create product list dynamically
    const li = document.createElement("li");
    li.textContent = product.name;
    ulList.appendChild(li);
  });
  paragraph.textContent = `$${avgPrice.toFixed(2)}`;
});