const { passwordCheck } = require("./password-strength.js");

test("Should return if password length is weak, medium or strong", () => {
  const result = passwordCheck("abcdef");
  expect(result).toBe("Medium password!");
});
