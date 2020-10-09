const dotenv = require('dotenv');
const fs = require('fs')
const path = require('path')
const connect = require('./captureConnections');

if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('rodando em localhost');
}


