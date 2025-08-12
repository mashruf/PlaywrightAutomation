const {test} = require('@playwright/test');

test('Browser Context Playwright test',async ({browser})=>{
    const context = await browser.newContext();//open new instance
    const page = await context.newPage();//on that instance open a page

    //on that page go to the url
    await page.goto("https://google.com");
})

test.only('Page Playwright test',async ({page})=>{
    
    await page.goto("https://google.com");
    
})