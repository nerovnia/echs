const { Sequelize, DataTypes } = require('sequelize');
const { getModelGelb } = require('../../models/gelb.js');
const { getModelKatelbez } = require('../../models/katelbez.js');
const { getModelBrig } = require('../../models/brig.js');
const { getModelMechanism } = require('../../models/mechanism.js');
const { getModelNarground } = require('../../models/narground.js');
const { getModelPosition } = require('../../models/position.js');
const { getModelUser } = require('../../models/user.js');
const { getModelEotype } = require('../../models/eotype.js');
const { getModelNardop } = require('../../models/nardop.js');
const { getModelNarswitch } = require('../../models/narswitch.js');
const { getModelRoztash } = require('../../models/roztash.js');
const { getModelWorker } = require('../../models/worker.js');
const { getModelKatvolt } = require('../../models/katvolt.js');

const { getDataGelb } = require('../db/data/gelb.js');
const { getDataEotype } = require('../db/data/eotype');
const { getDataKatelbez } = require('../db/data/katelbez.js');
const { getDataKatvolt } = require('../db/data/katvolt.js');
const { getDataMechanism } = require('../db/data/mechanism.js');
const { getDataPosition } = require('../db/data/position.js');
const { getDataRoztash } = require('../db/data/roztash.js');
const { getDataUser } = require('../db/data/user.js');
const { getDataWorker } = require('../db/data/worker.js');

const initModels = async (sequelize) => {
  const Gelb = await getModelGelb(sequelize).sync();
  const Katelbez = await getModelKatelbez(sequelize).sync();
  const Katvolt = await getModelKatvolt(sequelize).sync();
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

  const p = await new Promise((resolve, reject) => {
    const fillSimpleTable = (arr, model) => {
      arr.forEach(async el => {
        console.log(el);
        await model.create({ name: el })
      });
    }

    getDataUser.forEach(async user => {
      await User.create({ name: user.name, passwd: user.passwd, worker_id: 1 })
    });

    fillSimpleTable(getDataMechanism, Mechanism);
    fillSimpleTable(getDataGelb, Gelb);
    fillSimpleTable(getDataKatelbez, Katelbez);
    fillSimpleTable(getDataKatvolt, Katvolt);
    fillSimpleTable(getDataEotype, Eotype);
    fillSimpleTable(getDataRoztash, Roztash);
    fillSimpleTable(getDataPosition, Position);

    getDataWorker.forEach(async worker => {
      await Worker.create({ name: worker.name, lname: worker.lname, oname: worker.oname, position_id: worker.position, gelb_id: worker.gelb, pvnrless1000: worker.pvnrless1000, pvnrmore1000: worker.pvnrmore1000, mngrless1000: worker.mngrless1000, mngrmore1000: worker.mngrmore1000, allowless1000: worker.allowless1000, allowmore1000: worker.allowmore1000, supervisor: worker.supervisor, switch: worker.switch, member: worker.member, testing: worker.testing, onhate: worker.onhate, sling: worker.sling, load: worker.load })
    });

  /*
    fillSimpleTable(getData, );
*/
  }); 
}



const main = async () => {
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

main();