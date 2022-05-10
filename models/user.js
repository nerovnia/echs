const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelUser = (sequelize) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        get() {
          const rawValue = this.getDataValue('name');
          return rawValue ? rawValue : null;
        },
        set(value) {
          this.setDataValue('name', value);
        }
      },
      passwd: {
        type: DataTypes.STRING(25),
        allowNull: false.valueOf,
        set(value) {
          this.setDataValue('passwd', hash(value));
        }
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue('worker_id');
          return rawValue ? rawValue : null;
        },
        set(value) {
          this.setDataValue('worker_id', value);
        }
      },
    },
    {
      timestamps: false,
      tableName: 'user'
    }
  )
}