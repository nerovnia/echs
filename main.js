const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
//const { contextBridge, ipcRenderer } = require('electron');
const db = require('./db/db');
const m_menu = require('./js/menu.js');

//let sequelize;
const lock = app.requestSingleInstanceLock();
if (!lock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    app.focus();
  })
}


app.disableHardwareAcceleration();

global.sequelize = {};
global.dbModelsMap = new Map();

const createWindow = () => {
  db.connSet();
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    maxWidth: 1024,
    maxHeight: 768,
    title: 'Реєстр заявок/нарядів',
    show: false,
    backgroundColor: '#2980b9'
  });
  win.loadFile('index.html');

  win.on('ready-to-show', () => {
    win.show();
  })
  // Open the DevTools.
  win.webContents.openDevTools();
}

ipcMain.on('getRecords', (e, ...args) => {
  let res = {};
  let dbTblModelName = args[0];
  try {
    sequelize.authenticate()
      .then(() => {
        dbModelsMap.get(dbTblModelName).findAll()
          .then(recs => {
            res.status = 'OK';
            if (recs === null) {
              res.data = null;
            } else {
              res.dbTblModelName = dbTblModelName;
              res.data = recs;
            }
            console.log(res);
            e.reply('dbrecs', res);
          });
        });
  } catch (error) {
    res = {
      status: 'Error',
      message: 'Unable to connect to the database:'
    }
    e.reply('dbrecs', res);
  }
})

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed', () => {
  db.connClose();
  global.sequelize = null;
  global.dbModelsMap = null;
  app.quit()
})
