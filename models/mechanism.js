const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelMechanism = (sequelize) => {
  return sequelize.define(
    'mechanism',
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
      tableName: 'mechanism'
    }
  )
}