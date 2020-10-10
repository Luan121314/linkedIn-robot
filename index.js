const main = require('./src/main')
const dotenv = require('dotenv');
if(process.env.NODE_ENV !='PRODUCTION'){
    dotenv.config()
    console.log('rodando em localhost');
}

main()




