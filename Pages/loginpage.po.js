import { expect } from "@playwright/test"

export class loginpage{

constructor(page){

this.page = page
this.logo = page.locator('//img[@alt="company-branding"]')
this.usernameinput = page.locator ('//input[@name="username"]')
this.passwordInput = page.getByPlaceholder ('password')
this.loginBtn = page.locator('butoon[type="submit"]')
this.loginErrorMessage = page.locator ("//p[text()='Invalid credentials']")

}

async lunchUrl(){

    this.page.goto('/web/index.php/auth/login')
}
async verifyLogo (){

await  expect(this.logo).toBeVisible


}

async loginwithCreds(username, password){

await this.usernameinput.fill(username)
await this.passwordInput.fill(password)
await this.loginBtn.click()
}

async loginSuccess(){


await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/dashboard/index')

}

async loginfailure(){


await expect(this.loginErrorMessage).toBeVisible()

}


}