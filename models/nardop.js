const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelNardop = (sequelize) => {
  return sequelize.define(
    'nardop',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nnome: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ndate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      znome: {
        type: DataTypes.INTEGER,
      },
      zdate: {
        type: DataTypes.DATEONLY,
      },
      tfrom: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      tto: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      katelbez_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      brig_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      eotype_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fider: {
        type: DataTypes.STRING(70),
        allowNull: false
      },
      wname: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      mechanism_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sw_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gr_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'nardop'
    }
  )
}