'use strict';

module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    todo_text: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
    priority: DataTypes.TEXT
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};