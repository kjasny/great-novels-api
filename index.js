const express = require('express')
const app = express()
const {
  getAllAuthorsController,
  getAuthorByIdController,
  getAllGenresController,
  getGenreByIdController,
  getAllNovelsWithAuthorAndGenresController,
  getNovelByIdWithAuthorAndGenresController
} =
    require('./controllers/controllers')

app.get('/greatnovels/authors', getAllAuthorsController)

app.get('/greatnovels/authors/:id', getAuthorByIdController)

app.get('/greatnovels/genres', getAllGenresController)

app.get('/greatnovels/genres/:id', getGenreByIdController)

app.get('/greatnovels/novels', getAllNovelsWithAuthorAndGenresController)

app.get('/greatnovels/novels/:id', getNovelByIdWithAuthorAndGenresController)


app.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})
