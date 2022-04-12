const { app, BrowserWindow } = require('electron');
//const katelbez = require('./db/models/katelbez');
//const katelbez = require('./db/models/models');
const db = require('./db/db');

app.disableHardwareAcceleration();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  console.log(db.connection()); 
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})