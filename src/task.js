const BASE_URL = "https://www.linkedin.com";
const href_login = "/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin";
const href_Network = "/mynetwork";

const navigationBrowser = ()=>{
    const elementViewAll = "Button.ph2.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary.ember-view";
    const elementContact = "div.artdeco-modal__content.discover-cohort-recommendations-modal__content.ember-view li";
    let changedDocs = 0;
    document.querySelector(elementViewAll).click()
    const contacts = document.querySelectorAll(elementContact);
    contacts.forEach((contact)=>{
        contact.querySelector('footer Button').click();
        changedDocs++;
    });
    return {changedDocs}
}


async function render({page}){
    await page.goto( BASE_URL+href_login , { waitUntil: "networkidle2" });
    await page.type("#username", process.env.EMAIL);
    await page.type("#password", process.env.PASSWORD);
    await page.keyboard.press('Enter');
    
    await page.waitFor(2000);
    await page.goto(BASE_URL+href_Network, {waitUntil: "networkidle2"});
    const results = await page.evaluate(navigationBrowser);

    console.log(results);


}

module.exports = render