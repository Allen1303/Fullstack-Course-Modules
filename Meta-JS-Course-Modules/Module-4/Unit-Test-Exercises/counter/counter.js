"use strict";
//Helper Function for the core logic
const createCounter = () => {
  let counter = 0;
  return {
    increaseCounter: () => ++counter,
    decreaseCounter: () => --counter,
  };
};
const updateCounter = createCounter();

const incrementCounter = () => {
  const spanElement = document.getElementById("counterValue");
  const addCount = updateCounter.increaseCounter();
  spanElement.textContent = addCount;
  console.log(addCount);
};

const decrementCounter = () => {
  const spanElement = document.getElementById("counterValue");
  const subtractCount = updateCounter.decreaseCounter();
  spanElement.textContent = subtractCount;
  console.log(subtractCount);
};
module.exports = {createCounter}