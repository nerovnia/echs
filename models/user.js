const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelUser = (sequelize) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      passwd: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'user'
    }
  )
}