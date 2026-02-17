    const { addTask } = require("./todo-list.js");

test("should create a new task with given text", () => {
  const task = addTask("Walk the dog");
  expect(task.text).toBe("Walk the dog");
});
