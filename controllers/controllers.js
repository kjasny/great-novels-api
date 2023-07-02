const {
  getAllAuthors, getAuthorByID, getAllGenres, getGenreByID, getAllNovels, getNovelByID
} = require('../models/models')

const getAllAuthorsController = async (request, response) => {
  try { const allAuthors = await getAllAuthors()

    return response.send(allAuthors)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getAuthorByIdController = async (request, response) => {
  try { const { id } = request.params
    const foundAuthor = await getAuthorByID(id)

    return foundAuthor ? response.send(foundAuthor) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getAllGenresController = async (request, response) => {
  try { const allGenres = await getAllGenres()

    return response.send(allGenres)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getGenreByIdController = async (request, response) => {
  try { const { id } = request.params
    const foundGenre = await getGenreByID(id)

    return foundGenre ? response.send(foundGenre) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getAllNovelsWithAuthorAndGenresController = async (request, response) => {
  try { const allNovels = await getAllNovels()

    return response.send(allNovels)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getNovelByIdWithAuthorAndGenresController = async (request, response) => {
  try { const { id } = request.params
    const foundNovel = await getNovelByID(id)

    return foundNovel ? response.send(foundNovel) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}

module.exports = {
  getAllAuthorsController,
  getAuthorByIdController,
  getAllGenresController,
  getGenreByIdController,
  getAllNovelsWithAuthorAndGenresController,
  getNovelByIdWithAuthorAndGenresController
}
