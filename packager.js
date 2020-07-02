const packager = require('electron-packager');

async function bundleElectronApp(options) {
    const appPaths = await packager(options);
    console.log(`Electron app bundles created:\n${appPaths.join("\n")}`)
}

// electron-packager . FishBucket --platform=win32 --out=dist --overwrite --ignore=node_modules/electron-*
const opts = {
    dir: '.', // the src folder
    name: 'FishBucket',
    platform: 'win32',
    arch: 'ia32',
    electronVersion: '9.0.4',
    // icon: './app/assets/technical-support.png',
    // asar: true,
    overwrite: true,
    out: './build',
    // ignore: 'node_modules/electron-*',
};

bundleElectronApp(opts).then(result => console.log(result)).catch(e => console.error(e));