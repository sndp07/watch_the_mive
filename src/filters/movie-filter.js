const filterMovies = (key, movies) => {
  const lowerKey = key ? key.toLowerCase() : ''
  return movies.filter(movie => movie.name.toLowerCase().includes(lowerKey))
}

module.exports = filterMovies