const { Sequelize, DataTypes } = require('sequelize');

module.exports.getModelRole = (sequelize) => {
  return sequelize.define(
    'role',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      mask: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'role'
    }
  )
}

/* ---------------------- Delete after realise
// Method to check the entered password is correct or not 
UserSchema.methods.validPassword = function(password) { 
  var hash = crypto.pbkdf2Sync(password,  
  this.salt, 1000, 64, `sha512`).toString(`hex`); 
  return this.hash === hash; 
}; 
*/