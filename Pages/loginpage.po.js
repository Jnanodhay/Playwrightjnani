
class loginpage{

constructor(page){

this.page = page
this.logo = page.locator('//img[@alt="company-branding"]')
this.usernameinput = page.locator ('//input[@name="username"]')
this.passwordInput = page.getByPlaceholder ('password')
this.loginBtn = page.locator('butoon[type="submit"]')
this.loginErrorMessage = page.locator ("//p[text()='Invalid credentials']")

}

async lunchUrl(){

    this.pagegoto('')
}

}