const { userSearch } = require("./user-search.js");

test("Return an existing user", () => {
  const result = userSearch("Alice");
  expect(result).toEqual([{ name: "Alice" }]);
});
