'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Todos', 'date', Sequelize.DATEONLY);
    queryInterface.addColumn('Todos', 'priority', Sequelize.TEXT);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos', 'date');
    return queryInterface.removeColumn('Todos', 'priority');
  }
};