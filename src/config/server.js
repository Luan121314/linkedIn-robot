const express = require('express');
const app = express();
const route = require('../conttrollers/index');
app.use(route);
const port = process.env.PORT || 5000

module.exports = function(){
    app.listen(port, ()=>{
        console.log(`Server runninng in port ${port}`);
    });
}