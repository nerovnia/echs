const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelWorker = (sequelize) => {
  return sequelize.define(
    'worker',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fname: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      oname: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gelb_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      pvnr: {
        type: DataTypes.BOOLEAN
      },
      mngrless1000: {
        type: DataTypes.BOOLEAN
      },
      mngrmore1000: {
        type: DataTypes.BOOLEAN
      },
      allowance: {
        type: DataTypes.BOOLEAN
      },
      supervisor: {
        type: DataTypes.BOOLEAN
      },
      switch: {
        type: DataTypes.BOOLEAN
      },
      member: {
        type: DataTypes.BOOLEAN
      },
      testing: {
        type: DataTypes.BOOLEAN
      },
      onhate: {
        type: DataTypes.BOOLEAN
      },
      sling: {
        type: DataTypes.BOOLEAN
      },
      load: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      timestamps: false,
      tableName: 'worker'
    }
  )
}