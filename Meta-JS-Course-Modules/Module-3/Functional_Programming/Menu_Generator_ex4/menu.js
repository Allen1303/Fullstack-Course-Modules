"use strict";
const categoryData = {
  title: "All Categories",
  subcategories: [
    {
      title: "Books",
      subcategories: [
        { title: "Fiction", subcategories: [] },
        { title: "Non-fiction", subcategories: [] },
      ],
    },
    {
      title: "Electronics",
      subcategories: [
        { title: "Phones", subcategories: [] },
        { title: "Laptops", subcategories: [] },
      ],
    },
  ],
};
const categoryTree = document.getElementById("categoryTree");

const renderCategories = function (categoryObj, parentElement) {
  const li = document.createElement("li");
  li.textContent = categoryObj.title;
  parentElement.appendChild(li);

  if (categoryObj.subcategories && categoryObj.subcategories.length > 0) {
    const ul = document.createElement("ul");
    li.appendChild(ul);
    categoryObj.subcategories.forEach((element) => {
      renderCategories(element, ul);
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(categoryData, categoryTree);
});
