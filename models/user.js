const { Sequelize, DataTypes } = require('sequelize');
const  crypto = require('crypto'); 

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
      salt: {
        type: DataTypes.STRING(32),
        allowNull: false,
        get() {
          if (!(typeof this.getDataValue('salt') !== 'undefined' && this.getDataValue('salt'))) {
            this.setDataValue('salt', crypto.randomBytes(16).toString('hex'));
          }
          return this.getDataValue('salt');
        },
      },
      passwd: {
        type: DataTypes.STRING(128),
        allowNull: false.valueOf,
        set(passwd) {
          this.setDataValue('passwd', crypto.pbkdf2Sync(passwd, this.salt, 1000, 64, `sha512`).toString(`hex`));
        }
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
          return this.getDataValue('worker_id') ?? null;
        },
        set(value) {
          this.setDataValue('worker_id', value);
        },
        mask: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
    },
    {
      timestamps: false,
      tableName: 'user'
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