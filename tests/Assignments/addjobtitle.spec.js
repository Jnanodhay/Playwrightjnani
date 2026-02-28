import { test, expect } from '@playwright/test';


const employees = {

    emp1: { firstame: "Jnani", lastname: "R" },
    emp2: { firstname: "kiran", lastname: "D" },
    emp3: { firstname: "Abhi", lastname: "B" },

};

for (let emp in employees) {

    // console.log(employees[emp].firstname)
    // console.log(employees[emp].lastname)
    test(`Verify Admin can create employment status - ${emp}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator('input[name="username"]').fill('Admin')
        await page.locator("input[type='password']").fill('admin123')
        await page.locator("button[type='submit']").click()
        await page.locator("//span[text()='Admin']").click()
        await page.locator("//li[contains(.,'Job')]").click()

        await page.getByRole('textbox').nth(1).click();
        await page.getByRole('textbox').nth(1).fill('Mango');
        await page.getByRole('textbox', { name: 'Type description here' }).click();

        let randomchars = (Math.random() + 1).toString(36).substring(7);
        await page.getByRole('textbox', { name: 'Type description here' }).fill(employees[emp].firstname);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();

    });


}

//using data driven testing
//${status} literal concept in JS



