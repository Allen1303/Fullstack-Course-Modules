// Exercise 4: My Movie Collection
// Context:
// - The user creates a list of favorite moviesArr, can display them, and pick a random one.
// Hints:
// 1. Use an array to store movie names.
// 2. Write a function to add a movie from the input field to the array.
// 3. Write a function to display all moviesArr (use a for loop).
// 4. Write a function to pick a random movie (use Math.random and array length).
// 5. Show the picked movie in the output area.
// 6. Useful built-in methods: Array.push(), Array.forEach(), Array.length, Math.random(), Math.floor(), Array.join(), String.trim()
// 7. For UI: Use innerHTML or textContent to update the display area.

let moviesArr = [];

const addMovie = function () {
  const input = document.getElementById("movieInput");
  const result = document.getElementById("movieResult");
  const movie = input.value.trim();
  if (movie === "") {
    result.innerHTML = "⚠️ Please add a movie to your list";
    return;
  }
  moviesArr.push(movie);
  result.innerHTML = `${movie} added, the list has: ${
    moviesArr.length
  } Movie(s): ${moviesArr.join(", ")}`;
  input.value;
  input.focus();
};

const displayMovie = function () {
  const result = document.getElementById("movieResult");
  if (moviesArr === 0) {
    result.innerHTML = "⚠️ No movies on the list yet!";
  } else {
    let movieText = ""
    // let movieText = `Movie List: ${moviesArr.length} total: <br>`;
    for (let i = 0; i < moviesArr.length; i++) {
      movieText += ` • Movie-${i + 1} ${moviesArr[i]} <br>`;
    }
    movieText += `<strong>Total Movies: ${moviesArr.length}</strong>`;
    result.innerHTML = movieText;
    console.log(movieText);
  }
};
const pickRandomMovie = function () {
  const result = document.getElementById("movieResult");
  if (moviesArr.length === 0) {
    result.innerHTML = "⚠️ No movies to pick from";
    return;
  }
  const randomIndex = Math.floor(Math.random() * moviesArr.length);
  const randomMovie = moviesArr[randomIndex];
  result.innerHTML = `🎬 Watch:<strong> ${randomMovie}</strong>`;
  console.log(randomMovie);
};
