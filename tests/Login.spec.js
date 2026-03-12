import { test, expect } from '@playwright/test';
import data from "../testdata/login.json";
import { loginpage } from '..//Pages/loginpage.po';

test.describe("verify login", () => {

    test("verify login with valid credd", async ({ page }) => {
        const login = new loginpage(page)

        await login.launchUrl()
        await login.verifyLogo()
        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await login.loginSuccess()

    })
});