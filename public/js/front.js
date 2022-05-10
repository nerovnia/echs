//"use strict"

//const { default: axios } = require("axios");

const { contextBridge, ipcRenderer } = require('electron')


ipcRenderer.on('dbrecs', (e, initData)=> {
  console.log(initData);
  //console.log(initData);
});


const gelb = []; //dbModelsMap.get('Gelb').findAll()
const position = [];
const prizv = [];
const in_latters = [];
const katvolt = [];
const katelbez = [];

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
      ker: [],
      dop: [],
      brig: [],

      user: [
        'admin'
      ],
      workers: []
    }
  },
  created() {
    this.position = position;
    this.gelb = gelb;
    //this.katelbez = katelbez;
    ipcRenderer.send('getRecords', 'Katelbez');
    //console.log(this.katelbez);

    //ipcRenderer.send('getRecords', 'User', this.user);
    //ipcRenderer.send('getRecords', 'Katelbez', this.katelbez); 
    
    this.katvolt = katvolt;
    //this.workers = fillWorker(20);
    this.dop = this.workers.filter(w => w.allowance);

    //ipcRenderer.on('dbrecs', (e, initData, dest)=> {
    //ipcRenderer.on('dbrecs', (e, initData)=> {
    //  console.log(initData);
    //});
  },
  methods: {
    showKatelbez() {
      this.katelbez_w = true;
    }
  }
}).mount('#app');

