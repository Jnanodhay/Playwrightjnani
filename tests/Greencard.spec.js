import { test, expect } from '@playwright/test';



test('Verify cart price', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    const veg1 = "Brocolli - 1 Kg"

    const veg2 = "Mushroom - 1 Kg"


    await page.locator(`//h4[text()='${veg1}']/../div[3]/button`).click()

    await page.locator(`//h4[text()='${veg2}']/../div[3]/button`).click()

    const vegprice1 = await page.locator(`//h4[text()='${veg1}']/../p`).textContent()

    const vegprice2 = await page.locator(`//h4[text()='${veg2}']/../p`).textContent()

    const totalvalue = await page.locator(`//table/tbody/tr[2]/td[3]/strong`).textContent()

    console.log(vegprice1)
    console.log(vegprice2)
    console.log(totalvalue)

    await expect(Number(vegprice1) + Number(vegprice2)).toBe(Number(totalvalue))


})