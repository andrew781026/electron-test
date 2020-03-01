// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// 可以利用 IPC 將
// https://medium.com/@terracotta_ko/electron-ipc-%E6%A9%9F%E5%88%B6-2a1b087c9ae5

//> ipc for renderer process
let ipcRenderer = require('electron').ipcRenderer;

//> button
let btn = document.querySelector('#close');

btn.addEventListener('click', () => {
    //> send a message to close-main-window channel without args
    ipcRenderer.send('close-main-window');
});

document.querySelector('#open').addEventListener('click', () => {
    ipcRenderer.send('open-chrome');
});
