const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelKatvolt = (sequelize) => {
  return sequelize.define(
    'katvolt',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'katvolt'
    }
  )
}