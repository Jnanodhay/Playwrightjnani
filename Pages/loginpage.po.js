import { expect } from "@playwright/test"

import data from "../testdata/login.json"


export class loginpage {

    constructor(page) {

        this.page = page
        this.logo = page.locator('//img[@alt="company-branding"]')
        this.usernameinput = page.locator('//input[@name="username"]')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginBtn = page.locator('button[type="submit"]')
        this.loginErrorMessage = page.locator("//p[text()='Invalid credentials']")

    }

    async launchUrl() {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }

    async verifyLogo() {

        await expect(this.logo).toBeVisible()

    }

    async loginwithCreds(username, password) {

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()

    }

    async loginSuccess() {

        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/dashboard/index')

    }

    async loginfailure() {

        await expect(this.loginErrorMessage).toBeVisible()

    }

}