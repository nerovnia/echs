const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelNarswitch = (sequelize) => {
  return sequelize.define(
    'narswitch',
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
      tableName: 'narswitch'
    }
  )
}