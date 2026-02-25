import { test, expect } from '@playwright/test';

import data from "../../testdata/login.json"

import { faker } from '@faker-js/faker';

test('Verify Admin can add job title', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);

  await page.waitForTimeout(10000)
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click({timeout: 50000});
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  //let randomchars = (Math.random() + 1).toString(36).substring(7); // 5 chars generation

  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());

  await page.waitForTimeout(4000)

  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation tester');

  await page.getByRole('textbox', { name: 'Add note' }).fill('notes ');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible({timeout: 40000});
});