"use strict";
/**
 * @param { 🧩 Challenge 3: Parse and Display JSON Data }
 *@param Info "Decode and Display JSON Responses"
Modern web applications frequently rely on data returned from APIs in JSON format. Knowing how to parse and safely access nested values is essential for displaying or transforming external data in the UI.
@param Syntax 
const jsonStr = '{"weather":{"temp":29,"unit":"C"}}';
const parsed = JSON.parse(jsonStr);
console.log(parsed.weather.temp); // 29
 @param Task:
Parse a given JSON string simulating a book API response.
Extract the title, author, and year from the nested object.
Display the values inside the corresponding <span> elements when the button is clicked.
 */
//Test data
const jsonResponse = `
{
  "book": {
    "title": "Atomic Habits",
    "author": "James Clear",
    "year": 2018
  }
}
`;
const displayBook = () => {
  const parsedData = JSON.parse(jsonResponse);
  const { title, author, year } = parsedData.book;
  //Test for correct output
  console.log(parsedData.book);
  //Get DOM elements
  document.getElementById("bookTitle").textContent = title;
  document.getElementById("bookAuthor").textContent = author;
  document.getElementById("bookYear").textContent = year;
  document.getElementById("bookCard").classList.add("loaded");
};
