const shell = require("shelljs");

class Main{
    constructor() {
        let config = {
            name:'',
            port: '',
            localAddress: '',
            networkAddress: '',
        }
        let pa = process.cwd().split('/')
        config.name = pa[pa.length - 1]
        config.port = "8080"
        let address = require('os').networkInterfaces()
        let lcAddr = address['lo0'].find(v => v.family.toLowerCase() == 'ipv4')
        let ntAddr = address['en0'].find(v => v.family.toLowerCase() == 'ipv4')
        config.localAddress = lcAddr.address
        config.networkAddress = ntAddr.address

        try {
            let configFiles = require(process.cwd() + '/vue.config')
            if (configFiles.autoHybrid && configFiles.autoHybrid.name) {
                config.name = configFiles.autoHybrid.name
            }
            if (configFiles.devServer && configFiles.devServer.port) {
                config.port = configFiles.devServer.port
            }
        } catch (err) {}
        this.option = config
    }

    create(){
        this.initDir(this.option)
        this.dev(this.option)
    }
    dev(){
        this.config(this.option)
        this.addPlatform()
        this.end()
    }
    config(option){
        let WriteConfig = require('./overwrite')
        new WriteConfig(option).write()
    }
    initDir(option){
        shell.exec("./node_modules/.bin/cordova create src_cordova com.example.src_cordova " + option.name);
    }
    addPlatform(){
        shell.cd('src_cordova');
        shell.exec("cordova platform add android")
    }
    end(){
        console.log('Done')
    }
}

module.exports = new Main()