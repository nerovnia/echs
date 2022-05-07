const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelGelb = (sequelize) => {
  return sequelize.define(
    'gelb',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(2),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'gelb'
    }
  )
}
