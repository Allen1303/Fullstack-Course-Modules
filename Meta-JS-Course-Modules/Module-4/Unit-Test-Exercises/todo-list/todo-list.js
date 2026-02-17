"use strict";
/**
 * @param { Todo List Interactive App }
 */
//Core Logic: Pure Functions
const createTask = (text) => ({
  id: Date.now(), //timestamp
  text,
  completed: false,
});
console.log(createTask("Learn Testing"));

let taskListArr = [];
//Add Task helper function
const addTask = (text) => {
  const newTask = createTask(text);
  taskListArr.push(newTask);
  return newTask;
};

const toggleCompletedTask = (id) => {
  const task = taskListArr.find((item) => item.id === id);
  if (task) {
    task.completed = !task.completed;
  }
  return task;
};
// Function to Update UI
const renderTask = (task) => {
  const ul = document.getElementById("todoList");
  const li = document.createElement("li");
  li.textContent = task.text;
  li.classList.add("todo-item");
  if (task.completed) {
    li.classList.add("completed");
  }
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  ul.appendChild(li);
};
//Event Listener Function when Button is Click
const addTodo = () => {
  const todoInput = document.getElementById("todoInput");
  const text = todoInput.value.trim();
  if (text) {
    const task = addTask(text);
    renderTask(task);
    todoInput.value = "";
    todoInput.focus();
  }
};
module.exports = {createTask, addTask, renderTask, addTodo}
