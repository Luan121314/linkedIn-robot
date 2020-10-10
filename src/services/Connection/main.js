const { Cluster } = require('puppeteer-cluster');
const task = require('./task');

async function main() {
    const pid = process.pid;
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 2,
        timeout: 200000,
        puppeteerOptions: {
            devtools:true,
            timeout: 0
        }
    });
    try {

        await cluster.task(task)
        await cluster.execute();
        await cluster.idle();

    } catch (error) {
        console.log(`Error ${pid} \n${error.stack}`);
        console.log(`Error in process... \nProcess final forced !!` );
    } finally {
        await cluster.close();
    }
}
module.exports = main;