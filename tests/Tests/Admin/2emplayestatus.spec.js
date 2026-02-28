import { test, expect } from '@playwright/test';


const emstatuses = {

    empstatus1 : "Part time Morning Shift 1",
    empstatus2 : "Part time Second Shift 2",
    empstatus3 : "Part time Night Shif 3",

}

//using data driven testing
//${status} literal concept in JS
for(let status  in emstatuses){
test(`Verify Admin can create employment status - ${status}`, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    / 
    await page.locator('input[name="username"]').fill('Admin')


    await page.locator("input[type='password']").fill('admin123')
    await page.locator("button[type='submit']").click()
    await page.locator("//span[text()='Admin']").click()
    await page.locator("//li[contains(.,'Job')]").click()

    // click on employment status 

    await page.locator("//a[normalize-space(text())='Employment Status']").click()


    await page.locator("(//button[@type='button']//i)[3]").click()

    // Enter Employment status 

    let randomchars = (Math.random() + 1).toString(36).substring(7); 
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emstatuses[status])

    await page.locator("//button[@type='submit']").click()
   

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')

})




}

