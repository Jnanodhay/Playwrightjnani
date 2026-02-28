import { test, expect } from '@playwright/test';

const emstatuses = {
    emp1: { firstname: "Jnani", lastname: "R" },
    emp2: { firstname: "Kiran", lastname: "D" },
    emp3: { firstname: "Abhi", lastname: "B" },
};

// Data Driven Testing
for (let status in emstatuses) {

    test(`Verify Admin can create employment status - ${status}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // wait for login page
        await page.locator('input[name="username"]').waitFor();

        // Login
        await page.fill('input[name="username"]', 'Admin');
        await page.fill("input[type='password']", 'admin123');
        await page.click("button[type='submit']");

        // Navigate to Admin → Job → Employment Status
        await page.click("//span[text()='Admin']");
        await page.click("//span[text()='Job']");
        await page.click("//a[text()='Employment Status']");

        // Add employment status
        await page.click("button:has(i.bi-plus)");

        // create name using data + random
        let randomchars = Math.random().toString(36).substring(2, 6);

        let empName =
            emstatuses[status].firstname +
            "_" +
            emstatuses[status].lastname +
            "_" +
            randomchars;

        await page.fill("(//input[@class='oxd-input oxd-input--active'])[1]", );

        await page.click("//button[@type='submit']");

        // verification
        await expect(page).toHaveURL(/employmentStatus/);

    });
}