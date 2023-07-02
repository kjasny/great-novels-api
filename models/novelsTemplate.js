const novelsTemplate = (connection, Sequelize, authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } }
  }, { paranoid: true }) }

module.exports = novelsTemplate
