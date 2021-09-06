import { Cluster } from "puppeteer-cluster";
import Register from "../utils/register";
import task from './task'


async function main() {
    const register = new Register;
    const pid = process.pid;
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 2,
        timeout: 200000,
        puppeteerOptions: {
            // devtools: true,
            timeout: 0,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ]
        },
        
    });
    try {

        await cluster.task(task)

        await cluster.execute(null);
        await cluster.idle();

    } catch (error) {
        register.setError();
        console.log(`Error pid :${pid} \n${error.stack}`);
        console.log(`Error in process... \nProcess final forced !!`);
    } finally {
        register.setLastRegister()
        await cluster.close();
    }
}
export default main;