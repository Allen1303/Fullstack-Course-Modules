"use strict";
/**
 * @param { Challenge 1: Display Names in the Console }
 * @param forEach is good when you need to DO SOMETHING with each element (actions/side effects), rather than CREATE SOMETHING from the elements (new data).
 * @Example Syntax ->: 
 array.forEach((element, index, array) => {
  // do something with element
@param Intro: You're creating a script that greets attendees of an event. You don’t need to return anything—just print a custom greeting for each name.

@param Instructions: Use forEach() to loop through an array of names and print "Welcome, [name]!" for each attendee.
});
 */
//
document.getElementById("button-1").addEventListener("click", () => {
    const attendees = ["Alice", "Brian", "Carlos", "Diana"];

    const ul = document.getElementById("output-1");
    // ul.innerHTML = "";
    attendees.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = `Welcome: ${element}`;
        ul.appendChild(li);
    });
});
/**
 * @param { forEach() Challenge 2 }
Title: Mark Each Task as Complete
@param Intro: You’re creating a basic to-do list app. Each task needs to be marked visually as "Completed". Use forEach() to loop through the tasks and add a ✅ emoji prefix to each task.

@param Instructions: Loop over the tasks array and output each task with a ✅ icon inside #output2.
 */

document.getElementById("button-2").addEventListener("click", () => {
    const tasks = ["Send email", "Call client", "Upload files"];
    tasks.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = `Complete: ✅ ${element}`;
        const ul = document.getElementById("output-2");
        ul.appendChild(li);
    });
});

/**
 * @param { forEach() Challenge 3 }
Title: Add Price Tags to Items
@param Intro: You’re listing items in an online store. You want to format each product with its name and price. This simulates transforming data into UI-friendly output.
@param Instructions: Use forEach() to loop over the products array and output each as:
 
 */
document.getElementById("button-3").addEventListener("click", () => {
    const products = [
        { name: "Laptop", price: 999 },
        { name: "Phone", price: 599 },
        { name: "Tablet", price: 399 },
    ];
    products.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = `${element.name} - $${element.price.toFixed(2)}`;
        document.getElementById("output-3").appendChild(li);
    });
});
