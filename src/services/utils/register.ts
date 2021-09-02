import {writeFileSync, readFileSync} from 'fs'
import {resolve} from 'path'

const pathFile = resolve(__dirname,'..','..','resources','logs.json');

class Register{
    registerConnection(numConnections: number){
        const file = readFileSync(pathFile).toString();
        const fileJson = JSON.parse(file);
        const totalConnectionCreated = fileJson.totalConnectionCreated + Number(numConnections);
        const newFile = {...fileJson, totalConnectionCreated};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setError(){
        const file = readFileSync(pathFile).toString();
        const fileJson = JSON.parse(file);
        const errors = fileJson.errors + 1;
        const newFile = {...fileJson, errors};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setStart(){
        this.resetRegister();
        const file = readFileSync(pathFile).toString();
        const fileJson = JSON.parse(file);
        const started = new Date().toISOString()
        const newFile = {...fileJson, started};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }
    setLastRegister(){
        const file = readFileSync(pathFile).toString();
        const fileJson = JSON.parse(file);
        const lastRegister = new Date().toISOString()
        const newFile = {...fileJson, lastRegister};
        writeFileSync(pathFile, JSON.stringify(newFile))
    }

    resetRegister(){
       const register = {"totalConnectionCreated":0,"started":"","lastRegister":"","errors":0}
       writeFileSync(pathFile, JSON.stringify(register));
    }
}
export default Register