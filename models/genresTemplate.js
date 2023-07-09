const genresTemplate = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    name: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = genresTemplate
