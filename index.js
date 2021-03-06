const {app,BrowserWindow} = require('electron');
console.log(app);
function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  win.loadFile('index.html');

  win.webContents.openDevTools()

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('active', () => {
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
});