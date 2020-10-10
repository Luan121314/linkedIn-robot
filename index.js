const Connection = require('./src/services/Connection/Connection');
const dotenv = require('dotenv');
const Register = require('./src/services/utils/register');

require('./src/config/server')();

if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('running in localhost');
}
const register = new Register
register.setStart()
const connection = new Connection;
const intervalInHours = 10
const interval = 60000*intervalInHours; 
console.log(`Started application with interval ${interval/60000} minuts`);

setInterval(() => {
    connection.create();
    console.log('Creatting connection');
}, interval);





