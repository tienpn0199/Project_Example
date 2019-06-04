'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  });

  Task.associate = function (models) {
    models.Task.belongsTo(models.User, {   //belongsTo : 1 Task thuộc một User
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};
