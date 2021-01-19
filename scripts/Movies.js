export function Movies(movieObject) {
  return `
  <section class="movie-card">
    <img
      class="movie-card__image"
      src="${movieObject.image}"
      alt="Movie"
    />
    <div class="movie-card__text">
      <p>${movieObject.id}</p>
      <p>${movieObject.title}</p>
      <p>${movieObject.director}</p>
      <p>${movieObject.rank}</p>
    </div>
  </section>`
}