import { useMovie } from "./MovieDataProvider.js";
import { Movies } from "./Movies.js";

// console.log("this is movie collection", movieCollection)
let movieContainer = document.querySelector("#movie-list");

export function movieList() {
  const allTheMovies = useMovie();

  let movieListHTMLString = "";

//   for (const currentMovieInLoop of allTheMovies) {
//     console.log(currentMovieInLoop);
//     movieListHTMLString += Movies(currentMovieInLoop);
//   }

  for(let i = 0; i < allTheMovies.length; i++){
    movieListHTMLString += Movies(allTheMovies[i]);
  }

  console.log(movieListHTMLString);

  movieContainer.innerHTML = `<h2>Movies</h2> ${movieListHTMLString}`;

}