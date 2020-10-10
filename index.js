const Connection = require('./src/services/Connection/Connection');
const dotenv = require('dotenv');
const fs = require('fs');

if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('running in localhost');
}
const connection = new Connection;
const interval = 1000*60*60*24; 
console.log(`Started application with interval ${interval/3600000} hours`);

setInterval(() => {
    connection.create();
}, interval);





