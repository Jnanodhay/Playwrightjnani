import { expect } from '@playwright/test';

export class loginPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    this.invalidCredMsg = page.getByText('Invalid credentials');
    this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' });
    this.logoutDropdown = page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
  }

  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async verifyDashboard() {
    await expect(this.dashboardHeader).toBeVisible();
  }

  async verifyInvalidCredentials() {
    await expect(this.invalidCredMsg).toBeVisible();
  }

  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }

  async verifyLogout(){
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/dashboard/index');
  }
}