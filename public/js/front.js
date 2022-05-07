//"use strict"

//const { default: axios } = require("axios");

const { ipcRenderer } = require('electron')

const gelb = []

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
    this.katelbez = katelbez;
    this.katvolt = katvolt;
    //this.workers = fillWorker(20);
    this.dop = this.workers.filter(w => w.allowance);
    axios.get("https://reddit.com/r/aww.json")
      .then(response => {
        console.log(response.data.data.children);
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    showKatelbez() {
      this.katelbez_w = true;
    }
  }
}).mount('#app');