const models = require('.')


const getAllAuthors = async () => {
  try { const allAuthors = await models.AuthorsModel.findAll()

    return allAuthors
  } catch (error) {
    throw new Error('ERROR!')
  }
}

const getAuthorByID = async (id) => {
  try { const foundAuthor = await models.AuthorsModel.findOne({
    where: { id },
    include:
    [{
      model: models.NovelsModel,
      include:
    { model: models.GenresModel }
    }]
  })

  return foundAuthor
  } catch (error) {
    console.log(error)
  }
}

const getAllGenres = async () => {
  try { const allGenres = await models.GenresModel.findAll()

    return allGenres
  } catch (error) {
    throw new Error('ERROR!')
  }
}

const getGenreByID = async (id) => {
  try { const foundGenre = await models.GenresModel.findOne({
    where: { id },
    include:
    [{
      model: models.NovelsModel,
      include:
    { model: models.AuthorsModel }
    }]
  })

  return foundGenre
  } catch (error) {
    console.log(error)
  }
}

const getAllNovels = async () => {
  try { const allNovels = await models.NovelsModel.findAll({
    include: [
      { model: models.AuthorsModel },
      { model: models.GenresModel }]
  })

  return allNovels
  } catch (error) {
    throw new Error('ERROR!')
  }
}

const getNovelByID = async (id) => {
  try { const foundNovel = await models.NovelsModel.findOne({
    where: { id },
    include: [
      { model: models.AuthorsModel },
      { model: models.GenresModel }]
  })

  return foundNovel
  } catch (error) {
    throw new Error('ERROR!')
  }
}



module.exports = {
  getAllAuthors, getAuthorByID, getAllGenres, getGenreByID, getAllNovels, getNovelByID
}
