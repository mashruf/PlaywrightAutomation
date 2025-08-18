const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test',async ({browser})=>{
    const context = await browser.newContext();//open new instance
    const page = await context.newPage();//on that instance open a page
    const userName = page.locator('#username'); 
    const signIn = page.locator("#signInBtn");
    const card = page.locator(".card-body a");

    //on that page go to the url
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahulshetty"); //using the variable that hold the locator
    await page.locator('[name="password"]').fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
    
    await userName.fill("");//will erase the previously entered username
    await userName.fill("rahulshettyacademy");//using the varible that holds the locator
    await signIn.click();//using the variable that hold the locator

    console.log(await page.locator(".card-body a").first().textContent());//first product
    console.log(await page.locator(".card-body a").nth(1).textContent());//second product
    console.log(await page.locator(".card-body a").last().textContent());//last product

    const allCardTitle = await card.allTextContents();
    console.log(allCardTitle);


})

test('Page Playwright test',async ({page})=>{
    
    await page.goto("https://google.com");
    console.log(await page.title()); //printing title in console
    await expect(page).toHaveTitle("Google");//asserting the title
    
})