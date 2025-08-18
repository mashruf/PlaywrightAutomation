const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("baghizarif@proton.me");
    await page.locator("#userPassword").fill("@Baghizarif1");
    await page.locator("#login").click();

    //playwright will wait untill all api calls are made
    // await page.waitForLoadState("networkidle");

    //or
    
    await page.locator(".card-body b").first().waitFor();

    const card = await page.locator(".card-body b").allTextContents();
    console.log(card);

})
