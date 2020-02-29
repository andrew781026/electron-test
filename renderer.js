// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

//> close button
let closeBtn = document.getElementsByTagName('input')[0];

closeBtn.addEventListener('click', () => {
    //> send a message to close-main-window channel without args

    let myNotification = new Notification('標題', {
        body: '鼠牛虎兔龍蛇馬羊猴雞狗豬'
    });

    myNotification.onclick = () => {
        console.log('點了通知')
    };
});