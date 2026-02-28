import { test, expect } from '@playwright/test';

const emstatuses = {
  emp1: { firstname: "Jnani", lastname: "R" },
  emp2: { firstname: "kiran", lastname: "D" },
  emp3: { firstname: "Abhi", lastname: "B" },
};

// console check
for (let emp in emstatuses) {
  console.log(emstatuses[emp].firstname);
  console.log(emstatuses[emp].lastname);
}

// using data driven testing
// ${status} literal concept in JS
for (let status in emstatuses) {

  test(`Verify Admin can create employment status - ${status}`, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator("input[type='password']").fill('admin123');
    await page.locator("button[type='submit']").click();

    await page.locator("//span[text()='Admin']").click();
    await page.locator("//li[contains(.,'Job')]").click();

    // click on job title
     await page.getByRole('textbox').nth(1).click();

    await page.locator("(//button[@type='button']//i)[1]").click();

    // Enter Employment status
    let randomchars = (Math.random() + 1).toString(36).substring(7);

    await page
      .locator("(//input[@class='oxd-input oxd-input--active'])[1]")
      .fill(emstatuses[status].firstname + "_" + randomchars);

    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(
      'https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus'
    );
  });
// }

//   await page.getByRole('textbox').nth(1).click();
//   await page.getByRole('textbox').nth(1).fill('Mango');
//   await page.getByRole('textbox', { name: 'Type description here' }).click();
//   await page.getByRole('textbox', { name: 'Type description here' }).fill('Mango is a very good, and sweet');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible(); 