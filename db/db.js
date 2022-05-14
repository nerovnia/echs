const { Sequelize, DataTypes } = require('sequelize');
const { getModelKatelbez } = require('../models/katelbez');
const { getModelBrig } = require('../models/brig.js');
const { getModelMechanism } = require('../models/mechanism.js');
const { getModelNarground } = require('../models/narground.js');
const { getModelPosition } = require('../models/position.js');
const { getModelUser } = require('../models/user.js');
const { getModelEotype } = require('../models/eotype.js');
const { getModelNardop } = require('../models/nardop.js');
const { getModelNarswitch } = require('../models/narswitch.js');
const { getModelRoztash } = require('../models/roztash.js');
const { getModelWorker } = require('../models/worker.js');
const { getModelKatvolt } = require('../models/katvolt.js');
const { getModelGelb } = require('../models/gelb.js');

const initModels = async (sequelize) => {
  dbModelsMap.set('Katelbez', await getModelKatelbez(sequelize).sync());
  dbModelsMap.set('Brig', await getModelBrig(sequelize).sync());
  dbModelsMap.set('Mechanism', await getModelMechanism(sequelize).sync());
  dbModelsMap.set('Narground', await getModelNarground(sequelize).sync());
  dbModelsMap.set('Position', await getModelPosition(sequelize).sync());
  dbModelsMap.set('User', await getModelUser(sequelize).sync());
  dbModelsMap.set('Eotype', await getModelEotype(sequelize).sync());
  dbModelsMap.set('Nardop', await getModelNardop(sequelize).sync());
  dbModelsMap.set('Narswitch', await getModelNarswitch(sequelize).sync());
  dbModelsMap.set('Roztash', await getModelRoztash(sequelize).sync());
  dbModelsMap.set('Worker', await getModelWorker(sequelize).sync());
  dbModelsMap.set('Katvolt', await getModelKatvolt(sequelize).sync());
  dbModelsMap.set('Gelb', await getModelGelb(sequelize).sync());
  
  // Create a new user
  //const jane = await User.create({ name: "Jane", passwd: "Doe", worker_id: 1 });
  //console.log("Jane's auto-generated ID:", jane.id);
  //jane.name="";
}

const connSet = async () => {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite'
  });
  
  try {
    await sequelize.authenticate();
    console.log("Зв'язок з БД було встановлено");
    await initModels(sequelize);
  } catch (e) {
    console.log('Неможливо підключитися до БД: ', e);
  }  
}

const connClose = async () => {
  try {
    await sequelize.close();
  } catch (e) {
    console.log('Помилка при закритті бази даних!!!', e);
  }  
}

module.exports = { connSet, connClose };
