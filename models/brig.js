const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelBrig = (sequelize) => {
  return sequelize.define(
    'brig',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,        
        autoIncrement: true,
        primaryKey: true
      },
      nar_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'brig'
    }
  )
}