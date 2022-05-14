const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelMechanism = (sequelize) => {
  return sequelize.define(
    'mechanism',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'mechanism'
    }
  )
}