// Exercise 2: Book Library Object
// Context:
// - Practice creating an array of book objects (title, author, year)
// - Add, display, and search books using functions with parameters
// Hints:
// 1. Use functions that accept the book array as a parameter, e.g. addBook(arr), displayBooks(arr)
// 2. Use document.getElementById to get input values
// 3. Use array methods and loops to manage/display books
// 4. Use a function to handle the button click
// Example: function addBook(library) { ... }

// --- Write your solution below ---
const title = document.getElementById("titleInput");
const author = document.getElementById("authorInput");
const year = document.getElementById("yearInput");
const addBookBtn = document.getElementById("addBookBtn");
const showBooksBtn = document.getElementById("showBooksBtn");
const result = document.getElementById("bookResult");

let bookArr = [];

const addBook = function (arr) {
  const bookObj = {
    title: title.value,
    author: author.value,
    year: Number(year.value),
  };
  arr.push(bookObj);
  console.log(arr);
};

const displayBook = function () {
  if (bookArr.length === 0) {
    result.innerHTML = "⚠️ No Books to show";
  } else {
    let bookElement = "";
    for (let i = 0; i < bookArr.length; i++) {
      const book = bookArr[i];
      bookElement += `📚 Book ${i + 1}: ${book.title}, By: ${book.author}, 📅 Year:(${
        book.year
      })<br>`;
    }
    result.innerHTML = bookElement;
    console.log(bookElement);
  }
};
const handleBtnClicks = () => {
  addBookBtn.addEventListener("click", () => addBook(bookArr));
  title.value = "";
  title.focus();
  showBooksBtn.addEventListener("click", displayBook);
};
handleBtnClicks();
