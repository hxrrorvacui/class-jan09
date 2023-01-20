// Iteration 1: All directors? - Get the array of all directors.
    function getAllDirectors(moviesArray) {
    const directorsRaw = moviesArray.map(movies => movies.director);
    
    const directorsFiltered = directorsRaw.filter((director,index) => directorsRaw.indexOf(director) === index);
    return directorsFiltered;
}
    console.log(directors);
    console.log(directorsFiltered);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    moviesArray.forEach(movie => {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        count++;
      }
    });
    return count;
}
  console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = moviesArray.reduce((total, score) => total + score, 0);
    let average = sum / moviesArray.length;
    return Number(average.toFixed(2));
}
console.log(scoresAverage([8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9]));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) => {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
