const BASE_URL = "https://www.linkedin.com";
const href_login = "/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin";
const href_Network = "/mynetwork";

import Register from '../utils/register'
import {Page} from 'puppeteer'
import { manifest } from '../../../manifest';

function scrolingFinalPage (){
    const selectorViewAll = "Button.ph2.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary.ember-view";
    const viewAllElement = document.querySelector<HTMLButtonElement>(selectorViewAll)
    viewAllElement?.click()
    setTimeout(() => {
        const boxScroll = document.querySelector('div.artdeco-modal__content.discover-cohort-recommendations-modal__content.ember-view') as HTMLDivElement
        boxScroll.scrollTop = boxScroll.scrollHeight;
    }, 2000)
}

const navigationBrowser = (filters: Array<string>) => {
    const elementContact = "div.artdeco-modal__content.discover-cohort-recommendations-modal__content.ember-view li";
    let changedDocs = 0;
    const contacts = document.querySelectorAll(elementContact);
    

    contacts.forEach((contact) => {
        const button = contact.querySelector<HTMLButtonElement>('footer Button')
        const title = contact.querySelector<HTMLSpanElement>("span.discover-person-card__occupation")
        if(filters.length!!){
           const filter = filters.join('|')
           const regexFilter = new RegExp(filter, 'gi')
           if(!title?.innerText.match(regexFilter))  return
        }
        button?.click();
        changedDocs++;
    });
    return changedDocs
}


async function render({ page }: {page: Page}) {
    await page.goto(BASE_URL + href_login, { waitUntil: "networkidle2" });
    await page.type("#username", manifest.credentials.user || '');
    await page.type("#password", manifest.credentials.password || '');
    await page.keyboard.press('Enter');

    await page.waitFor(2000);
    await page.goto(BASE_URL + href_Network, { waitUntil: "networkidle2" });
    for (let index = 0; index < 10; index++) {
        await page.evaluate(scrolingFinalPage);
        await page.waitFor(8000);
    }

    const results = await page.evaluate(navigationBrowser, manifest.filter);

    const register = new Register;
    register.registerConnection(results);
    return 
}



export default render