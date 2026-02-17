"use strict";
// 🛒 Shopping Cart - Try-Catch Practice
// Your mission: Implement robust error handling for a real shopping cart!

// Global cart state
let cart = [];
let discountPercentage = 0;

// 🎯 CHALLENGE 1: Add to Cart with DOM Error Handling
function addToCart(productId) {
  try {
    // Step 1: Get product element safely
    const productCard = document.querySelector(`[data-id="${productId}"]`);
    // Step 2: Check if element exists, throw error if not
    if (!productCard) {
      throw new Error("⚠️ No product found!");
    }
    // Step 3: Extract product data from attributes
    const productData = {
      id: productId,
      name: productCard.dataset.name,
      price: parseFloat(productCard.dataset.price),
      quantity: 1,
    };
    // Step 4: Validate price is a number
    if (typeof productData.price !== "number" || isNaN(productData.price)) {
      throw new Error("⚠️ Invalid product price!");
    }
    // Step 5: Add to cart array
    cart.push(productData);
    // Step 6: Update UI
    updateCartDisplay();
    showMessage("✅ Product added to cart!", "success");
  } catch (error) {
    // Handle the error and show user-friendly message
    showMessage("❌ Failed to add product: " + error.message, "error");
  }
}

// 🎯 CHALLENGE 2: Update Cart Quantity with Calculation Errors
function updateQuantity(productId, change) {
  try {
    // Step 1: Find product in cart
    const product = cart.find((item) => item.id === productId);
    if (!product) {
      throw new Error("Product not found in cart!");
    }
    // Step 2: Calculate new quantity
    const newQuantity = Number(product.quantity) + Number(change);
    if (isNaN(newQuantity)) {
      throw new Error("⚠️ Invalid quantity calculation!");
    }
    // Step 3: Validate quantity constraints (min 1, max 100)
    if (newQuantity < 0 || newQuantity > 100) {
      throw new Error("Amount should be 1 to 100");
    }
    // Step 4: Update cart or remove if quantity is 0
    if (newQuantity === 0) {
      const index = cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    } else {
      product.quantity = newQuantity;
    }
    // Step 5: Update display
    updateCartDisplay();
    showMessage("✅ Quantity updated!", "success");
  } catch (error) {
    // Handle calculation errors
    showMessage(`❌ Failed to update quantity: ${error.message}`, "error");
  }
}

// 🎯 CHALLENGE 3: Save Cart - Note:Us localStorage
function saveCart() {
  // TODO: Handle localStorage operations
  // What could go wrong?
  // - localStorage not available
  // - Storage quota exceeded
  // - JSON stringify errors
  try {
    //Step 1 check if cart is empty before saving
    if (!Array.isArray(cart) || cart.length === 0) {
        throw new Error("⚠️ Cart is empty! Add some items before saving");
    }
    // Step 2: Check if localStorage is available
    if (!window.localStorage) {
      throw new Error("⚠️ LocalStorage is not supported");
    }
    const testKey = "__cart_test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    // Step 3: Convert cart to JSON safely
    const cartData = JSON.stringify(cart);
    // Step 4: Save to localStorage under a key called cartData
    localStorage.setItem("shopping_cart", cartData);
    // Step 5: Show success message
    showMessage("Cart saved successfully! ", "success");
  } catch (error) {
    // Handle different types of storage errors
    if (error.name === "QuotaExceededError") {
      showMessage("Storage quota exceeded. Please clear some data", error);
    } else if (error.message.includes("localStorage")) {
      showMessage(
        "Browser storage not available. Cart cannot be saved",
        "error"
      );
    } else {
      showMessage(`Failed to save cart: ${error.message}`, "error");
    }
  }
}

// 🎯 CHALLENGE 4: Load Cart - Note: localStorage not available in Claude artifacts
function loadCart() {
  try {
    // Step 1: Get data from localStorage safely. Retrieve the cart data string from localStorage.
    const savedCart = localStorage.getItem("shopping_cart");
    if (!savedCart) {
      throw new Error("⚠️ No saved cart found!");
    }
    // Step 2: Parse JSON with error handling. Use JSON.parse and catch any errors.
    const parsedCart = JSON.parse(savedCart);
    // Step 3: Validate cart structure
    if (!Array.isArray(parsedCart)) {
      throw new Error("Invalid cart data - not an array");
    }
    // Step 4: Restore cart and update display
    if (Array.isArray(parsedCart)) {
      cart = parsedCart;
      updateCartDisplay();
    }
  } catch (error) {
    // Handle parsing and validation errors Show a message if loading fails or data is invalid.
    showMessage(`Cart failed to load: ${error.message}`, "error");
  }
}

// 🎯 CHALLENGE 5: Apply Discount with Validation Errors
function applyDiscount() {
  try {
    // Step 1: Get discount code safely
    const discountCode = document.getElementById("discount-code").value;
    // Step 2: Validate discount code format
    const discount = discountCode.trim().toUpperCase();
    if (!discount.match(/^[A-Z]+\d+$/)) {
      throw new Error("Invalid discount code format! (e.g. SAVE10)");
    }

    // Step 3: Calculate discount percentage
    switch (discount) {
      case "SAVE10":
        discountPercentage = 0.1;
        break;
      case "SAVE15":
        discountPercentage = 0.15;
        break;
      case "SAVE20":
        discountPercentage = 0.2;
        break;
      default:
        throw new Error("Unknown discount code!");
    }
    // Step 4: Apply discount and update display
    let original_total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    let discount_amount = original_total * discountPercentage;

    updateCartDisplay();
    showMessage(
      `✅ Discount applied! Saved $${discount_amount.toFixed(2)}`,
      "success"
    );
  } catch (error) {
    // Handle validation errors
    showMessage(`❌ Discount error: ${error.message}`, "error");
  }
}

// 🎯 CHALLENGE 6: Calculate Total with Math Errors
function calculateTotal() {
  try {
    // Step 1: Calculate subtotal safely
    let subtotal = 0;
    for (const item of cart) {
      if (typeof item.price !== "number" || typeof item.quantity !== "number") {
        throw new Error("⚠️ Invalid item data!");
      }
      subtotal += item.price * item.quantity;
    }
    // Step 2: Apply discount
    const discount_total = subtotal - subtotal * discountPercentage;
    // Step 3: Add tax (8.5%)
    let taxes = 0.085;
    const final_amount = discount_total + discount_total * taxes;
    // Step 4 & 5: Round to 2 decimal places safely
    return parseFloat(final_amount.toFixed(2));
  } catch (error) {
    // Handle calculation errors
    showMessage(`❌ Calculation error: ${error.message}`, "error");
    return 0;
  }
}

// 🎯 CHALLENGE 7: Form Validation with Input Errors
function processCheckout(event) {
  event.preventDefault();

  try {
    // Step 1: Validate cart is not empty
    if (cart.length === 0) {
      throw new Error("Cart has no items!");
    }
    // Step 2: Get and validate form data
    const customerName = document.getElementById("customer-name").value;
    const customerEmail = document.getElementById("customer-email").value;
    if (!customerName.trim()) {
      throw new Error("⚠️ Name is required!");
    }
    if (!customerEmail.trim()) {
      throw new Error("⚠️ Email is required!");
    }

    // Step 3: Validate email format
    const email_test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_test.test(customerEmail)) {
      throw new Error("Please enter valid email");
    }
    // Step 4: Process "payment" (simulation)
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.textContent = "Processing...";
    checkoutBtn.disabled = true;

    setTimeout(() => {
      checkoutBtn.textContent = "Complete Purchase";
      checkoutBtn.disabled = false;

      // Step 5: Clear cart and show success
      cart = [];
      discountPercentage = 0;
      updateCartDisplay();
      showMessage("✅ Payment successful! Order confirmed", "success");
    }, 2000);
  } catch (error) {
    // Handle validation errors
    showMessage(`❌ Checkout failed: ${error.message}`, "error");
  }
}

// 🎯 CHALLENGE 8: Export Cart with File Operation Errors
function exportCart() {
  try {
    // Step 1: Convert cart to JSON safely
    const jsonCart = JSON.stringify(cart, null, 2);
    // Step 2: Create downloadable file
    const blob_file = new Blob([jsonCart], { type: "application/json" });
    const downloadUrl = URL.createObjectURL(blob_file);

    // Step 3: Trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "cart-export.json";
    downloadLink.click();
    //Clean up memory
    URL.revokeObjectURL(downloadUrl);

    showMessage("✅ Cart exported successfully!", "success");
  } catch (error) {
    // Handle export errors
    showMessage(`❌ Exporting cart failed: ${error.message}`, "error");
  }
}

// 🎯 HELPER FUNCTIONS
function removeFromCart(productId) {
  try {
    const index = cart.findIndex((item) => item.id === productId);
    if (index === -1) {
      throw new Error("Product not found in cart!");
    }
    cart.splice(index, 1);
    updateCartDisplay();
    showMessage("✅ Product removed from cart", "success");
  } catch (error) {
    showMessage(`❌ Failed to remove: ${error.message}`, "error");
  }
}

function updateCartDisplay() {
  try {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) {
      throw new Error("Cart count element not found");
    }
    cartCount.textContent = `(${cart.length})`;

    //get cart items container
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) {
      throw new Error("Cart items not found!");
    }

    //clear existing items
    cartItemsContainer.innerHTML = "";

    //Check if cart is empty
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p class="empty-cart">Your cart is empty</p>`;
      document.getElementById("total-price").textContent = "0.00";
      return;
    }

    //Create cart items HTML
    cart.forEach((item, index) => {
      const cartItemEl = document.createElement("div");
      cartItemEl.className = "cart-item";
      cartItemEl.innerHTML = `
                        <div class="cart-item-info">
                            <span class="product-image">${
                              item.name === "Laptop"
                                ? "💻"
                                : item.name === "Phone"
                                ? "📱"
                                : "🎧"
                            }</span>
                            <div>
                                <h4>${item.name}</h4>
                                <p>$${item.price.toFixed(2)} each</p>
                            </div>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity('${
                                  item.id
                                }', -1)">−</button>
                                <span class="quantity-display">${
                                  item.quantity
                                }</span>
                                <button class="quantity-btn" onclick="updateQuantity('${
                                  item.id
                                }', 1)">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart('${
                              item.id
                            }')">Remove</button>
                        </div>
                    `;
      cartItemsContainer.appendChild(cartItemEl);
    });

    // Update total price
    const total = calculateTotal();
    document.getElementById("total-price").textContent = total.toFixed(2);
  } catch (error) {
    console.error("Failed to update cart display:", error);
    showMessage(`❌ Display update failed: ${error.message}`, "error");
  }
}

function showMessage(message, type) {
  try {
    // Get message element
    const messageElement = document.getElementById("message");
    if (!messageElement) {
      throw new Error("Message element not found");
    }
    // Set message content and type
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    //Make message visible
    messageElement.style.display = "block";
    //Auto hide after 3 seconds
    setTimeout(() => {
      messageElement.style.display = "none";
    }, 3000);
  } catch (error) {
    // Fallback to console.log if DOM fails
    console.log(`${type.toUpperCase()}: ${message}`);
  }
}

function clearCart() {
  try {
    if (!Array.isArray(cart)) {
      throw new Error("Cart is not initialized");
    }
    //Clear the cart
    cart.length = 0;
    //Reset the discount
    discountPercentage = 0;
    // Update the UI
    updateCartDisplay();
    //show success message
    showMessage("✅ Cart cleared successfully!", "success");
  } catch (error) {
    showMessage(`❌ Failed to clear cart: ${error.message}`, "error");
  }
}

// 🎯 EVENT LISTENERS SETUP
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Step 1: Add to cart buttons
    document.querySelectorAll(".add-to-cart-btn").forEach((button, index) => {
      button.addEventListener("click", function () {
        // Get the product ID from the parent product card
        const productCard = button.closest(".product-card");
        if (productCard) {
          const productId = productCard.dataset.id;
          addToCart(productId);
        }
      });
    });

    // Step 2: Save cart button
    const saveButton = document.getElementById("save-cart");
    if (saveButton) {
      saveButton.addEventListener("click", saveCart);
    }

    // Step 3: Load cart button
    const loadButton = document.getElementById("load-cart");
    if (loadButton) {
      loadButton.addEventListener("click", loadCart);
    }

    // Step 4: Clear cart button
    const clearButton = document.getElementById("clear-cart");
    if (clearButton) {
      clearButton.addEventListener("click", clearCart);
    }

    // Step 5: Export cart button
    const exportButton = document.getElementById("export-cart");
    if (exportButton) {
      exportButton.addEventListener("click", exportCart);
    }

    // Step 6: Apply discount button
    const discountButton = document.getElementById("apply-discount");
    if (discountButton) {
      discountButton.addEventListener("click", applyDiscount);
    }

    // Step 7: Checkout form
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", processCheckout);
    }

    // Initialize display
    updateCartDisplay();
    showMessage("🛒 Shopping cart loaded successfully!", "success");
  } catch (error) {
    console.error("Failed to set up event listeners:", error);
    showMessage("❌ Some features may not work properly", "error");
  }
});
//
