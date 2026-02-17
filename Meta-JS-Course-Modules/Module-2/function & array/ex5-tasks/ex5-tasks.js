"use strict";
// Exercise 5: My Tasks (To-Do List)
// Context:
// - The user manages a to-do list: add, show all, and remove the first task.
// Hints:
// 1. Use an array to store tasks.
// 2. Write a function to add a task from the input field to the array.
// 3. Write a function to display all tasks (use a for loop).
// 4. Write a function to remove the first task (use array.shift()).
// 5. Update the display after adding or removing tasks.
// 6. Optionally, show a message if the list is empty.
// 7. Useful built-in methods: Array.push(), Array.shift(), Array.forEach(), Array.length, Array.join(), String.trim()
// 8. For UI: Use innerHTML or textContent to update the display area.

let input, result, addBtn, showBtn, removeBtn;

// Cache DOM elements after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  input = document.getElementById("taskInput");
  result = document.getElementById("taskResult");
  addBtn = document.getElementById("addTaskBtn");
  showBtn = document.getElementById("showTasksBtn");
  removeBtn = document.getElementById("removeTaskBtn");

  addBtn.addEventListener("click", addTask);
  showBtn.addEventListener("click", showTasks);
  removeBtn.addEventListener("click", removeTask);
});

let taskArr = [];

const addTask = () => {
  const task = input.value.trim();
  if (task === "") {
    result.innerHTML = "⚠️ No Task entered yet!";
    return;
  }
  taskArr.push(task);
  result.innerHTML = `${task} Added, there is now ${
    taskArr.length
  }, task(s) to complete. ${taskArr.join(", ")}`;
  input.value = "";
  input.focus();
};
const showTasks = () => {
  if (taskArr === 0) {
    result.innerHTML = "📋 There are no Task to complete";
  } else {
    taskText = "";
    for (let i = 0; i < taskArr.length; i++) {
      taskText += `${i + 1} ☑️ ${taskArr[i]} <br>`;
    }
    taskText += ` Number Of task(s): <strong> ${taskArr.length}</strong>`;
    result.innerHTML = taskText;
  }
};
const removeTask = () => {
  if (taskArr === 0) {
    result.innerHTML = "⚠️ No task to remove!";
    return;
  }
  const remove = taskArr.shift();
  result.innerHTML = `Remove: <strong> ${remove}</strong>. You have <strong>${taskArr.length}, </strong> task (s)to complete`;
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addTaskBtn").addEventListener("click", addTask);
  document.getElementById("showTasksBtn").addEventListener("click", showTasks);
  document
    .getElementById("removeTaskBtn")
    .addEventListener("click", removeTask);
});
