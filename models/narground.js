const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelNarground = (sequelize) => {
  return sequelize.define(
    'narground',
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
      tableName: 'narground'
    }
  )
}