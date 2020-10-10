const {readFileSync, writeFileSync} = require('fs');
const {resolve} = require('path');

const pathFile = resolve(__dirname,'..','..','resources','logs.json');

 

class Register{
    registerConnection(numConnections){
        const file = readFileSync(pathFile);
        const fileJson = JSON.parse(file);
        const totalConnectionCreated = fileJson.totalConnectionCreated + Number(numConnections);
        const newFile = {...fileJson, totalConnectionCreated};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setError(){
        const file = readFileSync(pathFile);
        const fileJson = JSON.parse(file);
        const errors = fileJson.errors + 1;
        const newFile = {...fileJson, errors};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setStart(){
        const file = readFileSync(pathFile);
        const fileJson = JSON.parse(file);
        const started = new Date().toISOString()
        const newFile = {...fileJson, started};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setLastRegister(){
        const file = readFileSync(pathFile);
        const fileJson = JSON.parse(file);
        const lastRegister = new Date().toISOString()
        const newFile = {...fileJson, lastRegister};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
}

module.exports = Register