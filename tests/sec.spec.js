import { test, expect } from '@playwright/test';

import data from "../testdata.json/login.json"

test('Verify Admin can add job title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.waitForTimeout(10000)
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click({timeout: 50000});
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole ('textbox').nth(1).fill(faker.person.jobTitle());
  await page.waitForTimeout(50000)

});