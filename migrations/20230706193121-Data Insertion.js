'use strict'
const authorsData = require('../data/authorsData')
const novelsData = require('../data/novelsData')
const genresData = require('../data/genresData')
const novelGenresData = require('../data/novelGenresData')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('authors', authorsData)

    queryInterface.bulkInsert('genres', genresData)

    queryInterface.bulkInsert('novels', novelsData)

    return queryInterface.bulkInsert('novelGenres', novelGenresData)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('novelGenres')

    queryInterface.bulkDelete('novels')

    queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
