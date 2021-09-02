import dotenv from 'dotenv'
import Register from "./src/services/utils/register";
import Connection from "./src/services/Connection/Connection";

if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('running in localhost');
}
const register = new Register
register.setStart()
const connection = new Connection;
const intervalInMinuts = 2;
const interval = 60000*intervalInMinuts; 
console.log(`Started application with interval ${interval/60000} minuts`);

setInterval(() => {
    connection.create();
    console.log('Creatting connection');
}, interval);





