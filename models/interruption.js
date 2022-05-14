const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelInterruption = (sequelize) => {
  return sequelize.define(
    'interruption',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      interrupttype_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: 'interruption'
    }
  )
}
