import { test, expect } from '@playwright/test';
import logindata from '../../Testdata/loginData.json' ;
import { loginPage } from '../../Pages/logout.po.js';

let loginlogoutPage;
test.beforeEach(async ({ page }) => { 
  loginlogoutPage = new loginPage(page);
 await loginlogoutPage.gotoLoginPage();
});

test('Login with Valid credentials', { tag: '@login' }, async ({ page }) => {

  //Launch URL
  await loginlogoutPage.login(logindata.username, logindata.password);
  //Verify Dashboard is displayed
  await loginlogoutPage.verifyDashboard();

});

test('Login with Valid username & invalid password', { tag: '@login' }, async ({ page }) => {

  await loginlogoutPage.login(logindata.username, logindata.wrongpassword);
  await loginlogoutPage.verifyInvalidCredentials();
});

test('Login with Invalid username & invalid password', { tag: '@login' }, async ({ page }) => {
 
  await loginlogoutPage.login(logindata.wrongusername, logindata.wrongpassword);
  await loginlogoutPage.verifyInvalidCredentials();
});

test('Logout with Invalid username & valid password', { tag: '@login' }, async ({ page }) => {
  await loginlogoutPage.login(logindata.wrongusername, logindata.password);
  await loginlogoutPage.verifyInvalidCredentials();
});

test('Logout', { tag: '@login' }, async ({ page }) => {

  await loginlogoutPage.login(logindata.username, logindata.password);
  await loginlogoutPage.logoutDropdown.click();
  await loginlogoutPage.logoutBtn.click();
  await loginlogoutPage.verifyLogout();
})