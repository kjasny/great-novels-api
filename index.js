const express = require('express')
const app = express()
const {
  getAllAuthorsController,
  getAuthorBySearchTermController,
  getAllGenresController,
  getGenreByIdController,
  getAllNovelsWithAuthorAndGenresController,
  getNovelBySearchTermWithAuthorsAndGenresController
} =
    require('./controllers/controllers')

app.get('/greatnovels/authors', getAllAuthorsController)

app.get('/greatnovels/authors/:searchTerm', getAuthorBySearchTermController)

app.get('/greatnovels/genres', getAllGenresController)

app.get('/greatnovels/genres/:id', getGenreByIdController)

app.get('/greatnovels/novels', getAllNovelsWithAuthorAndGenresController)

app.get('/greatnovels/novels/:searchTerm', getNovelBySearchTermWithAuthorsAndGenresController)


app.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})
