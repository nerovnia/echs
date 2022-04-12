const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelRoztash = (sequelize) => {
  return sequelize.define(
    'roztash',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'roztash'
    }
  )
}