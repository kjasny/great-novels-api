const Sequelize = require('sequelize')
const authorsTemplate = require('./authorsTemplate')
const novelsTemplate = require('./novelsTemplate')
const genresTemplate = require('./genresTemplate')
const novelGenresTemplate = require('./novelGenresTemplate')
const configs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = configs[environment]
const {
  database, username, password, host, dialect
} = config

const connection = new Sequelize(database,
  username,
  password,
  { host, dialect })

const AuthorsModel = authorsTemplate(connection, Sequelize)
const GenresModel = genresTemplate(connection, Sequelize)
const NovelsModel = novelsTemplate(connection, Sequelize, AuthorsModel)
const NovelGenresModel = novelGenresTemplate(connection, Sequelize, GenresModel, NovelsModel)

AuthorsModel.hasMany(NovelsModel)
NovelsModel.belongsTo(AuthorsModel)

GenresModel.belongsToMany(NovelsModel, { through: NovelGenresModel })
NovelsModel.belongsToMany(GenresModel, { through: NovelGenresModel })

module.exports = { AuthorsModel, GenresModel, NovelsModel, NovelGenresModel }
