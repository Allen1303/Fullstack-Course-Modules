"use strict";
//Cache DOM arrItems
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

class Product {
  #price; // private property ( Encapsulation )
  constructor(id, name, category, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.#price = price;
  }
  getPrice() {
    return this.#price;
  }
  getDetails() {
    return `${this.name}: ${this.#price}`;
  }
}
class ShoppingCart {
  #items = [];
  #total = 0;
  addItem(product) {
    this.#items.push(product);
    this.#total += product.getPrice();
    console.log(`Added: ${product.name}, price: ${product.getPrice()}`);
  }
  getItems() {
    return this.#items;
  }
  getTotal() {
    return this.#total;
  }

  // getCartSummary(){
  //   return {
  //     Items: this.#items,
  //     Total:this.#total
  //   }

  // }
}

// Test data
const availableProducts = [
  new Product(1, "Laptop", "Electronics", 999.99),
  new Product(2, "Headphones", "Electronics", 199.99),
  new Product(3, "Book", "Books", 19.99),
  new Product(4, "Sneakers", "Apparel", 89.99),
];

const cart = new ShoppingCart();
const renderProducts = function (prodArray) {
  prodArray.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.textContent = item.getDetails();
    //Add to Cart button
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.setAttribute("data-id", item.id);

    listElement.appendChild(addBtn);
    productList.appendChild(listElement);

    addBtn.addEventListener("click", () => {
      cart.addItem(item);
      renderCart();
    });
  });
};
renderProducts(availableProducts);

const renderCart = function () {
  cartList.innerHTML = "";
  cart.getItems().forEach((cartItem) => {
    const list = document.createElement("li");
    list.textContent = cartItem.getDetails();
    cartList.appendChild(list);
  });
  cartTotal.textContent = `total: $${cart.getTotal().toFixed(2)}`;
};
