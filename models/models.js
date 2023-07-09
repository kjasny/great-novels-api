const models = require('.')
const Sequelize = require('sequelize')


const getAllAuthors = async () => {
  try { const allAuthors = await models.AuthorsModel.findAll()

    return allAuthors
  } catch (error) {
    throw new Error('ERROR!')
  }
}

const getAuthorBySearchTerm = async (searchTerm) => {
  try { const foundAuthor = await models.AuthorsModel.findAll({
    where: {
      [Sequelize.Op.or]: [
        { id: searchTerm },
        { nameLast: { [Sequelize.Op.like]: `%${searchTerm}%` } }]
    },
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

const getNovelBySearchTerm = async (searchTerm) => {
  try { const foundNovel = await models.NovelsModel.findOne({
    where: {
      [Sequelize.Op.or]: [
        { id: searchTerm },
        { title: { [Sequelize.Op.like]: `%${searchTerm}%` } }]
    },
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
  getAllAuthors, getAuthorBySearchTerm, getAllGenres, getGenreByID, getAllNovels, getNovelBySearchTerm
}
