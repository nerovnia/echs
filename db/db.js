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

const initModels = async (sequelize) => {

  /*
  const Katelbez = await getModelKatelbez(sequelize).sync({ alter: true });
  const Brig = await getModelBrig(sequelize).sync({ alter: true });
  const Mechanism = await getModelMechanism(sequelize).sync({ alter: true });
  const Narground = await getModelNarground(sequelize).sync({ alter: true });
  const Position = await getModelPosition(sequelize).sync({ alter: true });
  const User = await getModelUser(sequelize).sync({ alter: true });
  const Eotype = await getModelEotype(sequelize).sync({ alter: true });
  const Nardop = await getModelNardop(sequelize).sync({ alter: true });
  const Narswitch = await getModelNarswitch(sequelize).sync({ alter: true });
  const Roztash = await getModelRoztash(sequelize).sync({ alter: true });
  const Worker = await getModelWorker(sequelize).sync({ alter: true });
*/

  
  const Katelbez = await getModelKatelbez(sequelize).sync();
  const Brig = await getModelBrig(sequelize).sync();
  const Mechanism = await getModelMechanism(sequelize).sync();
  const Narground = await getModelNarground(sequelize).sync();
  const Position = await getModelPosition(sequelize).sync();
  const User = await getModelUser(sequelize).sync();
  const Eotype = await getModelEotype(sequelize).sync();
  const Nardop = await getModelNardop(sequelize).sync();
  const Narswitch = await getModelNarswitch(sequelize).sync();
  const Roztash = await getModelRoztash(sequelize).sync();
  const Worker = await getModelWorker(sequelize).sync();

// Create a new user
const jane = await User.create({ name: "Jane", passwd: "Doe", worker_id: 1 });
console.log("Jane's auto-generated ID:", jane.id);
jane.name="";



/*
const Katelbez = await getModelKatelbez(sequelize);
const Nardop = await getModelNardop(sequelize);

  Nardop.hasMany(Katelbez);
  Katelbez.belongsTo(Nardop);
  sequelize.sync();
*/
/*
  Nardop.associate = models => {
    Nardop.hasMany(Katelbez, {
      foreignKey: 'katelbez_id'
    });
  }

  await Nardop.sync({ alter: true });
  await Katelbez.sync({ alter: true });
*/ 
/*
  const User = sequelize.define('user', { username: Sequelize.STRING }, {
    underscored: true
  });
  const Task = sequelize.define('task', { title: Sequelize.STRING }, {
    underscored: true
  });*/
  //Nardop.hasMany(Katelbez);
  //Katelbez.belongsTo(Nardop);
/*
  console.log(Katelbez === sequelize.models.katelbez) // true
  console.log(Brig === sequelize.models.brig);
  console.log(Mechanism === sequelize.models.mechanism);
  console.log(Narground === sequelize.models.narground);
  console.log(Position === sequelize.models.position);
  console.log(User === sequelize.models.user);
  console.log(Eotype === sequelize.models.eotype);
  console.log(Nardop === sequelize.models.nardop);
  console.log(Narswitch === sequelize.models.narswitch);
  console.log(Roztash === sequelize.models.roztash);
  console.log(Worker === sequelize.models.worker);
*/
}


module.exports.connection = async () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite'
  });
  
  try {
    await sequelize.authenticate();
    console.log('Соединение с БД было успешно установлено');
    await initModels(sequelize);

    await sequelize.close();
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e);
  }  
}
