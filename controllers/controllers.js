const {
  getAllAuthors, getAuthorBySearchTerm, getAllGenres, getGenreByID, getAllNovels, getNovelBySearchTerm
} = require('../models/models')

const getAllAuthorsController = async (request, response) => {
  try { const allAuthors = await getAllAuthors()

    return response.send(allAuthors)
  } catch (error) {
    return response.sendStatus(500)
  }
}

const getAuthorBySearchTermController = async (request, response) => {
  try { const { searchTerm } = request.params
    const foundAuthor = await getAuthorBySearchTerm(searchTerm)

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

const getNovelBySearchTermWithAuthorsAndGenresController = async (request, response) => {
  try { const { searchTerm } = request.params
    const foundNovel = await getNovelBySearchTerm(searchTerm)

    return foundNovel ? response.send(foundNovel) : response.sendStatus(404)
  } catch (error) {
    return response.sendStatus(500)
  }
}

module.exports = {
  getAllAuthorsController,
  getAuthorBySearchTermController,
  getAllGenresController,
  getGenreByIdController,
  getAllNovelsWithAuthorAndGenresController,
  getNovelBySearchTermWithAuthorsAndGenresController
}
