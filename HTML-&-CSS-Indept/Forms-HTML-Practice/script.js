"use strict";
// Cache DOM elements
const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const concentCheck = document.getElementById("concent-check");
const messageInput = document.getElementById("message");

//Eventlistener logic
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const queryType = document.querySelector(
        'input[name="query-type"]:checked',
    )?.value;
    const message = messageInput.value;
    const concent = concentCheck.checked;
});
