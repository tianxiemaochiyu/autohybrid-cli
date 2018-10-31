class WriteConfig {
    constructor(config){
        this.config = config
    }
    write(){
        const fs = require('fs');
        const configPath = process.cwd() + '/src_cordova/config.xml'
        let fsContent = fs.readFileSync(configPath, 'utf8');
        let result = fsContent
        result = result.replace(/<content.*>/g, (match) => {
            return match.replace(
                /src=".*"/,
                `src="http://${this.config.networkAddress}:${this.config.port}"`)
        })
        result = result.replace(/<name>.*<\/name>/g, match => `<name>${this.config.name}</name>`)
        fs.writeFileSync(configPath, result, 'utf8');
    }
}

module.exports = WriteConfig