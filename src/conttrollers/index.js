const { Router } = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const route = Router();

route.get('/', (request, response) => {
    const pathFile = resolve(__dirname,'..', 'resources', 'logs.json')
    const logs = JSON.parse(readFileSync(pathFile));
    return response.json(logs)
});

module.exports = route;