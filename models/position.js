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
        type: DataTypes.STRING(30),
        allowNull: false
      },
      namesk: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'position'
    }
  )
}