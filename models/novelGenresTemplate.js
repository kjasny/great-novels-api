const novelGenresTemplate = (connection, Sequelize, genres, novels) => {
  return connection.define('novelGenres', {
    id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    novelId: { type: Sequelize.INTEGER, references: { model: novels, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } }
  }, { paranoid: true })
}

module.exports = novelGenresTemplate
