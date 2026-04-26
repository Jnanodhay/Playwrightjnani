import { test, expect } from '@playwright/test';

test('Test 1',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox',{ name:"username" }).fill('Admin');
await page.getByRole('textbox',{name: "password"}).fill('admin123');
await page.getByRole('button',{name:'Login'}).click();
//await page.getByRole('button', { name: 'Login' }).click();


//  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();


})
