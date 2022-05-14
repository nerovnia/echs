//"use strict"

//const { default: axios } = require("axios");

const { contextBridge, ipcRenderer } = require('electron')

const app = Vue.createApp({
  data() {
    return {
      main_w: false,
      katelbez_w: false,
      login_w: false,
      about_w: false,
      zayavka_w: true,
      katelbez: [],
      katvolt: [],
      gelb: [],
      position: [],
      workers: []
    }
  },
  computed: {
    ker() {
      return this.workers;
    },
    dop() {
      return this.workers;
    },
    brig() {
      return Array.from(this.workers, worker => {
        worker.dataValues.full_name = `${this.position.find(pos => pos.dataValues.id == worker.dataValues.position_id).dataValues.name} ${worker.dataValues.lname} ${worker.dataValues.name}. ${worker.dataValues.oname}. гр. ${this.gelb.find(e => e.dataValues.id == worker.dataValues.gelb_id).dataValues.name}`;
        return worker;
      });
    }
  },
  created() {
    ipcRenderer.send('getRecords', 'Katelbez');
    ipcRenderer.send('getRecords', 'Katvolt');
    ipcRenderer.send('getRecords', 'Gelb');
    ipcRenderer.send('getRecords', 'Position');
    ipcRenderer.send('getRecords', 'Worker');
  },
  methods: {
    showKatelbez() {
      this.katelbez_w = true;
    }
  }
}).mount('#app');

ipcRenderer.on('dbrecs', (e, initData)=> {
  if(initData != null) {
    switch(initData.dbTblModelName) {
      case 'Katelbez':
        app.katelbez = initData.data;
        break;
      case 'Katvolt':
        app.katvolt = initData.data;
        break;
      case 'Gelb':
        app.gelb = initData.data;
        break;
      case 'Position':
        app.position = initData.data;
        break;
      case 'Worker':
        app.workers  =  initData.data;
        break;
    }
  }
});
