import dotenv from 'dotenv'
import Register from "./src/services/utils/register";
import Connection from "./src/services/Connection/Connection";
import { manifest } from './manifest';

if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('service running');
}
const register = new Register
register.setStart()
const connection = new Connection;
const intervalInMinuts = manifest.interval;
const interval = 60000*intervalInMinuts; 
console.log(`Started application with interval ${interval/60000} minuts`);

setInterval(() => {
    connection.create();
    console.log('Creatting connection');
}, interval);





