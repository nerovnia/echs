const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelKatelbez = (sequelize) => {
  return sequelize.define(
    'katelbez',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'katelbez'
    }
  )
}
