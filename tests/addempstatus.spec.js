import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  await page.locator("input[name='username']").fill('Admin')
  await page.locator("input[name='password']").fill('admin123')
  await page.locator ("button[type='submit']").click()  // 
  await page.close() // this command uses to close the page atomatically
});