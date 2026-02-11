import { test, expect } from '@playwright/test';

// test('Login with valid credentials', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('heading', { name: 'Dashboard' }).click();
// });

test ('valid credentils',async({page})=>{
await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await page.locator ('textbox',{name:'username'}).click();
await page.locator ('text',{name:'username'} ).fill('Admin').toBeVisible({timeout:30000})



});