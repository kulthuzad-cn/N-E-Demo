const Package = require('../package.json');
const ops = {
    title: 'App Vue Test',
    appName: Package.build.productName,
    width: {
        default: 800,
        max: 800,
        min: 500
    },
    height: {
        default: 500,
        max: 500,
        min: 500
    },
    manifestUrl: "http://localhost:8080/dist/nw/upgrade.json",
    resizable: true,
    iconUrl: "/static/logo.png",
    frame: false,//边框模式
    show: true,//启动即展示页面
    cache: false,//页面缓存
    fullscreen: false,//全屏
    'always-on-top': false,//置顶
    transparent: false,//透明
};
module.exports = {
    nw: {
        name: Package.name,
        appName: ops.appName,
        version: Package.version,
        description: Package.description,
        author: Package.author,
        main: "index.html",
        manifestUrl: ops.manifestUrl,
        window: {
            title: ops.title,
            toolbar: true,
            width: ops.width.default,
            height: ops.height.default,
            min_width: ops.width.min,
            min_height: ops.height.min,
            resizable: ops.resizable,
            frame: ops.frame,
            kiosk: false,
            show: ops.show,
            icon: ops.iconUrl,
            show_in_taskbar: false,//是否在任务栏显示图标
            fullscreen: ops.fullscreen,
        },
        nodejs: true,
        "js-flags": "--harmony",
        "node-remote": "<all_urls>"
    },
    electron: {
        frame: ops.frame,//隐藏顶部控制条
        // useContentSize: true,//自适应框内内容
        show: ops.show,
        width: ops.width.default,
        height: ops.height.default,
        webPreferences: {webSecurity: true},
        transparent: ops.transparent,
        nodeIntegration: false,//禁止node集成
        contextIsolation: true,//上下文隔离
    },
    web: {}
};
