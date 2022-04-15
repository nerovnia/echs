const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelEotype = (sequelize) => {
  return sequelize.define(
    'eotype',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: 'eotype'
    }
  )
}
