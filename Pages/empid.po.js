import { expect } from '@playwright/test';

export class employeePage {

    constructor(page) {
        this.page = page;

        // Locators
        this.PIMlink = page.getByRole('link', { name: 'PIM' });
        this.addEmpLink = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.empId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.errormessage = page.getByText('Employee Id already exists', { exact: true });
        this.empListLink = page.getByRole('link', { name: 'Employee List' });
        this.empIdSearchBox = page.getByText('Employee Id', { exact: true })
        this.empNameSearchBox = page.getByRole('textbox', { name: 'Type for hints...' }).first()
        this.editPencilIcon = page.locator('.oxd-table-card').first().locator('.oxd-icon').first();

        this.empIdSearchBox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.empIdLocator = page.locator('//div[@class="oxd-table-card"]//div[2]');
        this.editPencilIcon = page.getByRole('button').filter({ hasText: /^$/ }).nth(3)
        this.editEmployeeFirstName = page.getByRole('textbox', { name: 'First Name' })
        this.editEmployeeLastName = page.getByRole('textbox', { name: 'Last Name' })
        this.editEmployeeId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.deleteIcon = page.locator('i.oxd-icon.bi-trash')
        this.confirmDeleteBtn = page.getByRole('button', { name: 'Yes, Delete' })



    }

    async gotoAddEmpPage() {
        await this.PIMlink.click();
        await this.addEmpLink.click();
    }

    async addEmployee(firstName, lastName, empId) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.empId.fill(empId);
    }

    async saveVerifyPersonalDetailsPage() {
        await this.saveBtn.click();
        await expect(this.page).toHaveURL(/viewPersonalDetails/), { timeout: 15000 };
    }

    async gotoEmpLIstPage() {
        await this.empListLink.click();
    }

    async verifybyEmpId(empId) {
        await this.empListLink.click();
        await this.empIdSearchBox.fill(empId);
        await this.searchBtn.click();
        const empRow = this.page.locator('.oxd-table-card').filter({ hasText: empId });
        await expect(empRow).toHaveCount(1);
        await expect(empRow).toBeVisible()
    }

    async verifybyEmpName(firstName, lastName) {
        await this.empListLink.click();
        // Implementation for verifying employee by name
        await this.empListLink.click();
        await this.empNameSearchBox.fill(firstName);
        await this.searchBtn.click();
        const empRow = this.page.locator('.oxd-table-card').filter({ hasText: `${firstName} ${lastName}` });
        await expect(empRow).toHaveCount(1);
        await expect(empRow).toBeVisible()
    }

    async editVerifyEmployeeDetails(firstName, lastName, empId) {
        // Click on the edit pencil icon for the employee
        await this.editPencilIcon.click();
        await expect(this.page).toHaveURL(/viewPersonalDetails/), { timeout: 15000 };
        //verify that the personal details page is displayed with correct employee information
        await expect(this.editEmployeeFirstName).toHaveValue(firstName);
        console.log(this.editEmployeeFirstName + "is the same as" + firstName);
        await expect(this.editEmployeeLastName).toHaveValue(lastName);
        //  console.log(this.editEmployeeFirstName +"is the same as"+ firstName);
        console.log(this.editEmployeeLastName + "is the same as " + lastName);

        await expect(this.editEmployeeId).toHaveValue(empId);
        console.log(this.editEmployeeId + " is the same as " + empId);
    }

    async deleteEmployee(empId) {
        // Click on the delete icon for the employee
        await this.deleteIcon.click();
        // Confirm the deletion
        await this.confirmDeleteBtn.click();
        console.log("Clicked on confirm delete button");
        // Verify that the employee is deleted successfully
        await this.empIdSearchBox.fill(empId);
        await this.searchBtn.click();
        const empRow = this.page.locator('.oxd-table-card').filter({ hasText: empId });
        await expect(empRow).toHaveCount(0);
    }
    
}