import { test, expect } from '@playwright/test';
import logindata from '../../testdata/loginData';
import { loginPage } from '../../Pages/empid.po';
import { employeePage } from '../../Pages/logout.po';
import { faker } from '@faker-js/faker'
import path from 'path';

let loginlogoutPage;
let employeeCreationPage;

test.beforeEach(async ({ page }) => {
    loginlogoutPage = new loginPage(page);
    employeeCreationPage = new employeePage(page);
    await loginlogoutPage.gotoLoginPage();
    await loginlogoutPage.login(logindata.username, logindata.password);
    await employeeCreationPage.gotoAddEmpPage();
});

test('Create a New Employee', { tag: "@PIM" }, async ({ page }) => {

    await employeeCreationPage.addEmployee(faker.person.firstName(), faker.person.lastName(), faker.number.int({ min: 1000, max: 9999 }).toString());
    await employeeCreationPage.saveBtn.click();

    //verify personal details page
    await employeeCreationPage.verifyPersonalDetailsPage();
})

test('Verify created employee using employee ID', { tag: "@PIM" }, async ({ page }) => {
    const empId = faker.number.int({ min: 1000, max: 9999 }).toString();
    await employeeCreationPage.addEmployee(faker.person.firstName(), faker.person.lastName(), empId);
    console.log(empId);

    //verify personal details page
    await employeeCreationPage.saveVerifyPersonalDetailsPage();
    await employeeCreationPage.verifybyEmpId(empId);
})

test('Verify created employee using employee name', { tag: "@PIM" }, async ({ page }) => {
    const empId = faker.number.int({ min: 1000, max: 9999 }).toString();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    await employeeCreationPage.addEmployee(firstName, lastName, empId);
    console.log(empId);
    console.log(firstName);
    console.log(lastName);

    //verify personal details page
    await employeeCreationPage.saveVerifyPersonalDetailsPage();
    await employeeCreationPage.verifybyEmpName(firstName, lastName);
})

test('Edit Employee Details', { tag: "@PIM" }, async ({ page }) => {
    const empId = faker.number.int({ min: 1000, max: 9999 }).toString();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    await employeeCreationPage.addEmployee(firstName, lastName, empId);
    console.log(empId);
    console.log(firstName);
    console.log(lastName);

    //verify personal details page
    await employeeCreationPage.saveVerifyPersonalDetailsPage();
    await employeeCreationPage.verifybyEmpName(firstName, lastName);
    await employeeCreationPage.editVerifyEmployeeDetails(firstName, lastName, empId);


})

test('Delete Employee Details', { tag: "@PIM" }, async ({ page }) => {
    const empId = faker.number.int({ min: 1000, max: 9999 }).toString();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    await employeeCreationPage.addEmployee(firstName, lastName, empId);
    console.log(empId);
    console.log(firstName);
    console.log(lastName);

    //verify personal details page
    await employeeCreationPage.saveVerifyPersonalDetailsPage();
    await employeeCreationPage.verifybyEmpId(empId);
    await employeeCreationPage.deleteEmployee(empId);
})