"use strict";

var _electron = _interopRequireDefault(require("electron"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _electron["default"].app;
var BrowserWindow = _electron["default"].BrowserWindow;
var mainWindow; // *Funcoes devem ser exportadas pra serem acessiveis ao front-end
// Executa comando do SO e retorna resultado ao front-end
// Outro processo é o IPCMaine IPCRenderer
// https://electronjs.org/docs/api/ipc-main
// https://electronjs.org/docs/api/ipc-renderer

exports.execProcess = function (process, callback) {
  var _require = require('child_process'),
      exec = _require.exec;

  var callExec = exec(process);
  callExec.stdout.on('data', function (data) {
    callback(data);
  });
  callExec.stderr.on('data', function (data) {
    callback("<b>ERROR:</b> \n" + data);
  });
};

var createWindow = function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // Caracteristicas visuais da janela
    // autoHideMenuBar: true,
    // titleBarStyle: 'customButtonsOnHover',
    frame: false,
    // Retira barra superior
    useContentSize: false,
    // Inibe mostragem de dimensao da janela
    webPreferences: {
      nodeIntegration: true
    }
  }); //mainWindow.removeMenu();

  mainWindow.loadURL(_url["default"].format({
    pathname: _path["default"].join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});