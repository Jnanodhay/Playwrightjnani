import { test, expect } from '@playwright/test';


const emstatuses = {

    empstatus1 : "Part time Morning Shift",
    empstatus2 : "Part time Second Shift",
    empstatus3 : "Part time Night Shift",

}

//using data driven testing

for(let status  in emstatuses){

    //test.use({ locale: 'fr-FR' });
test(`Verify Admin can create employment status - ${status}`, async ({ page }) => {

    // Launch URL 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Enter Username 
    await page.locator('input[name="username"]').fill('Admin')

    // Enter Password 

    await page.locator("input[type='password']").fill('admin123')

    // click on login button
    await page.locator("button[type='submit']").click()


    // Verify dashboard url (Current URL)
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // click on admin menu 
    await page.locator("//span[text()='Admin']").click()

    //clico on JOb

    await page.locator("//li[contains(.,'Job')]").click()

    // click on employment status 

    await page.locator("//a[normalize-space(text())='Employment Status']").click()

    // click on add button 

    await page.locator("(//button[@type='button']//i)[3]").click()

    // Enter Employment status 

    let randomchars = (Math.random() + 1).toString(36).substring(7); // 5 chars generation
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emstatuses[status])

    // click on save 

    await page.locator("//button[@type='submit']").click()
    // 

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')

    // Created emp status is displayed 

    //await expect(page.locator("//div[normalize-space(text())='Part time Job 3']")).toBeVisible()

   // close browser page 

  // await page.close()

})




}

