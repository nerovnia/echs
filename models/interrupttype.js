const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelInterrupttype = (sequelize) => {
  return sequelize.define(
    'interrupttype',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'interrupttype'
    }
  )
}
