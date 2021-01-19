export function Movies(movieObject) {
  return `
  <section class="movie-card">
    <img
      class="movie-card__image"
      src="${movieObject.image}"
      alt="Movie"
    />
    <div class="movie-card__text">
      <p>Movie ID: ${movieObject.id}</p>
      <p>${movieObject.title}</p>
      <p>Directed by: ${movieObject.director}</p>
      <p>Rank: ${movieObject.rank}</p>
    </div>
  </section>`
}