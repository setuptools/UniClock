const {app , BrowserWindow, ipcMain} = require("electron");
const path = require('path');


let AppWindow

function createWindow(){
    console.log(__dirname);
    AppWindow = new BrowserWindow({
        width:250,
        height:150,
        alwaysOnTop:true,
        frame:false,
        transparent:true,
        icon: "app.ico",

        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
            devTools:false
        }
    });

    AppWindow.setResizable(false);
    AppWindow.loadFile("./static/index.html");

    ipcMain.on('close', () => {
        AppWindow.close();
    });

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
