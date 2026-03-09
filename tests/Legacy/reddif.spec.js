import { test, expect } from '@playwright/test';

test('Redif Register', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')


})

test("Verify add task", async ({ page }) => {

    await page.goto('http://localhost:3000/')
})


// test('Login with Valid credentials', async ({ page }) => {
//   await page.goto('/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
// }); 