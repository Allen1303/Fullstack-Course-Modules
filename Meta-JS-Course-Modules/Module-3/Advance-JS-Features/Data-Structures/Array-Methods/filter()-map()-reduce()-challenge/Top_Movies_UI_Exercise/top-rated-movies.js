"use strict";
/**
 *@param { Top Rated Movies Challenge }
 @param Pseudo code
 @param Use filter() to keep movies with imdbRating >= 8.0
@param Use forEach() (or map() if preferred) to display titles in the <ul>
@param Use reduce() to compute total runtime
@param Insert the runtime into the <span id="totalRuntime">
 */
const button = document.getElementById("show-movies-btn");
const movieList = document.getElementById("movie-list");
const runTime = document.getElementById("totalRuntime");

button.addEventListener("click", () => {
  //Test data
  const movies = [
    {
      title: "Inception",
      imdbRating: "8.8",
      runtime: 148,
    },
    {
      title: "The Dark Knight",
      imdbRating: "9.0",
      runtime: 152,
    },
    {
      title: "Interstellar",
      imdbRating: "8.6",
      runtime: 169,
    },
    {
      title: "Tenet",
      imdbRating: "7.3",
      runtime: 150,
    },
    {
      title: "Dunkirk",
      imdbRating: "7.9",
      runtime: 106,
    },
    {
      title: "The Prestige",
      imdbRating: "8.5",
      runtime: 130,
    },
    {
      title: "Memento",
      imdbRating: "8.4",
      runtime: 113,
    },
  ];
  const topMovies = movies
    .filter((movie) => parseFloat(movie.imdbRating) >= 8.0)
    .sort((a, b)=> parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
    .map((movie) => ({
      title: movie.title,
      rating: movie.imdbRating,
      runtime: movie.runtime,
    }));
  console.log(topMovies);
  const totalRuntime = topMovies.reduce((acc, movie) => acc + movie.runtime, 0);
  movieList.innerHTML = "";
  topMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = `Title: ${movie.title} - IMDb:${movie.rating}`;
    movieList.appendChild(li);
  });
  runTime.textContent = totalRuntime;
  runTime.style.color = "red";
  console.log(totalRuntime);
});
