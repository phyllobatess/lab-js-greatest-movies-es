const movies = require('./data.js');
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}

console.log(
  `1. A list of directors of this data is ${getAllDirectors(movies)}`
);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// Arrow function
// const howManyMovies2 = (moviesArray) => {
//   // 1st nos creamos una vairable que filtremos en el moviesArray para conseguir un valor de "steven spielrberg"
//   const steven = moviesArray.filter(
//     (movieItem) => movieItem.director === "Steven Spielberg"
//   );
//   // 2dn vamos a generar una variable nueva para filtrar los generos de peliculas que corresponden al genero de drama que viene por defecto de la variable que tenemos arriba con el nombre de steven.
//   const dramaMovies = steven.filter((spielberg) =>
//     spielberg.genre.includes("Drama")
//   );
//   return dramaMovies;
// };

// Regular Function
function howManyMovies() {
  const steven = movies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes('Drama'));
  return dramaMovies;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sumAverages = moviesArray.map((number) => number.score);
  let suma = 0;
  for (let i = 0; i < sumAverages.length; i++) {
    suma += sumAverages[i];
  }

  return (suma / sumAverages.length).toFixed(2);
}
console.log(
  `Iteración 3: La media de las scores de las peliculas es ${scoresAverage(
    movies
  )}`
);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramaMoviesAverage = moviesArray.filter((movieDramAv) =>
    movieDramAv.genre.includes('Drama')
  );
  const sumAveragesDrama = dramaMoviesAverage.map((number1) => number1.score);
  let sumaDr = 0;
  for (let j = 0; j < dramaMoviesAverage.length; j++) {
    sumaDr += sumAveragesDrama[j];
  }
  return (sumaDr / dramaMoviesAverage.length).toFixed(2);
}
console.log(
  `Iteración 4: La media de las peliculas de drama es ${dramaMoviesScore(
    movies
  )}`
);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderList = moviesArray.sort((a, b) => a.year - b.year);
  return orderList;
}
console.log(`iteracion 5: List of movies ordered by ascending year`);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log(`6. First 20 movies ordered by tittle`);
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
