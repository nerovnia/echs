const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelPosition = (sequelize) => {
  return sequelize.define(
    'position',
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
      tableName: 'position'
    }
  )
}