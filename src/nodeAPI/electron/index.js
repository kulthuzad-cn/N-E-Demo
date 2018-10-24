const {ipcRenderer: ipc} = require('electron');
const uuid = _ => sessionStorage.getItem('uuid');
ipc.on('log', (e, arg) => console.log(arg));

const obj = {
    /*顶部条基础操作 最大，最小，关闭*/
    windowHandle(type) {
        ipc.send(type, uuid());
    },
    /*新建窗口*/
    newBusinessWin() {
        ipc.send('newBusinessWin');
    },
    /*查询全部窗口*/
    searchLoginState() {
        return ipc.sendSync('searchLoginState', uuid());
    },
    /*登陆广播*/
    loginBroadcast(accountID) {
        ipc.send('loginBroadcast', {uuid: uuid(), accountID});
    }
};

module.exports = obj;
