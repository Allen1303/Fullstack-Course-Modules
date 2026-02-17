"use strict";
/**
 * @param { Search App Unit Test Exercise with UI Interaction }
 *
 */
function userSearch(name) {
  const users = [
    { name: "Alice" },
    { name: "John" },
    { name: "David" },
    { name: "Mark" },
    { name: "Rachel" },
  ];
  if (!name) return "User not found!";
  const results = users.filter(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  return results.length > 0 ? results : "User not found!";
}
// console.log(userSearch("bob"));

const searchInput = document.getElementById("searchInput");
const unorderedList = document.getElementById("userList");
function updateUserSearch(results) {
  unorderedList.innerHTML = "";

  if (Array.isArray(results)) {
    results.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `✅ User: ${user.name}`;
      unorderedList.appendChild(li);
    });
  } else {
    unorderedList.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = `⚠️ ${results}`;
    paragraph.style.display = "block";
    paragraph.style.color = "red";
    unorderedList.appendChild(paragraph);
  }
}
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const debounceSearch = debounce((query) => {
  const results = userSearch(query);
  updateUserSearch(results);
}, 300);
searchInput.addEventListener("input", (event) => {
  debounceSearch(event.target.value);
});

module.exports = { userSearch };
