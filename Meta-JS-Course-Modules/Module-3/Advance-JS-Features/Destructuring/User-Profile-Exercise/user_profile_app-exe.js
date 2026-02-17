"use strict";
/**
 * @param { 🧩 Challenge 1: Extract User Profile Info with Destructuring }
@param Title & Intro:
"Quick Profile Lookup Using Object Destructuring"
Web apps often fetch user data in large JSON blobs. Efficiently extracting only the relevant parts using destructuring can simplify the code and boost readability. This pattern is especially useful when you need to display or validate just a subset of user profile info.
@param Example: Extracting data from a product object
const product = { name: "Laptop", price: 999, specs: { cpu: "i7", ram: "16GB" } };
const { name, specs: { cpu } } = product;
console.log(name); <-Output-> "Laptop"
console.log(cpu);  <-Output-> "i7"
 */
const user = {
  id: 101,
  name: "Allen",
  email: "allen@example.com",
  address: {
    city: "Kingston",
    country: "Jamaica",
  },
};

//@param Task: Destructure user object and insert into the spans
const { name, email, address:{city} } = user;
console.log(city);

document.getElementById("userName").textContent = name;
document.getElementById("userEmail").textContent = email;
document.getElementById("userCity").textContent = city;
