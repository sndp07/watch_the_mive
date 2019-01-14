console.log('Starting Server....')
const express = require('express');
const cors = require('cors');

const filterMovies = require('./src/filters/movie-filter')
const movieStub = require('./src/stub/movies')

const app = express();

app.use(cors())

app.post('/movies', (req, res) => {
  const key = req.query.key
  const filteredList = filterMovies(key, movieStub)
  res.setHeader('Content-Type', 'application/json')
  res.json({filteredList})
})

const port = 5000;
app.listen(port)
console.log('Started....')