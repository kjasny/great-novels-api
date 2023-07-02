const Sequelize = require('sequelize')
const authorsTemplate = require('./authorsTemplate')
const novelsTemplate = require('./novelsTemplate')
const genresTemplate = require('./genresTemplate')
const novelGenresTemplate = require('./novelGenresTemplate')

const connection = new Sequelize('k_greatNovelsDB',
  'k_greatNovels_user',
  'gr8Novels',
  { host: '173.230.134.130', dialect: 'mysql' })

const AuthorsModel = authorsTemplate(connection, Sequelize)
const GenresModel = genresTemplate(connection, Sequelize)
const NovelsModel = novelsTemplate(connection, Sequelize, AuthorsModel)
const NovelGenresModel = novelGenresTemplate(connection, Sequelize, GenresModel, NovelsModel)

AuthorsModel.hasMany(NovelsModel)
NovelsModel.belongsTo(AuthorsModel)

GenresModel.belongsToMany(NovelsModel, { through: NovelGenresModel })
NovelsModel.belongsToMany(GenresModel, { through: NovelGenresModel })

module.exports = { AuthorsModel, GenresModel, NovelsModel, NovelGenresModel }
