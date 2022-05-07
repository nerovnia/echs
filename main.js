const { app, BrowserWindow } = require('electron');
//const katelbez = require('./db/models/katelbez');
//const katelbez = require('./db/models/models');
const db = require('./db/db');
const m_menu = require('./js/menu.js');

app.disableHardwareAcceleration();

const createWindow = () => {
  const win = new BrowserWindow({
    //webPreferences: {webSecurity: false},
    width: 800,
    height: 600
  });
  console.log(db.connection()); 
  win.loadFile('index.html');
  // Open the DevTools.
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
})