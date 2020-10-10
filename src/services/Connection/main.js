const { Cluster } = require('puppeteer-cluster');
const Register = require('../utils/register');
const task = require('./task');

async function main() {
    const register = new Register;
    const pid = process.pid;
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 2,
        timeout: 200000,
        puppeteerOptions: {
            timeout: 0,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
              ]
        }
    });
    try {

        await cluster.task(task)
        await cluster.execute();
        await cluster.idle();

    } catch (error) {
        register.setError();
        console.log(`Error pid :${pid} \n${error.stack}`);
        console.log(`Error in process... \nProcess final forced !!` );
    } finally {
        register.setLastRegister()
        await cluster.close();
    }
}
module.exports = main;