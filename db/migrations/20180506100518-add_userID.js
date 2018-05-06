'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Todos', 'userID', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos', 'userID');
  }
};
