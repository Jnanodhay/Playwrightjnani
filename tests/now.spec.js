import { test, expect } from '@playwright/test';

test.describe("Hooks Example", () => {

  test.beforeAll(() => {
    console.log("Before all tests - runs only one time");
  });

  test.afterAll(() => {
    console.log("After all tests - runs only one time");
  });

  test.beforeEach(() => {
    console.log("Before each test");
  });

  test.afterEach(() => {
    console.log("After each test");
  });

  test("Test Case 1", async ({ page }) => {
    console.log("Executing Test Case 1");
    expect(5).toBe(5);
  });

  test("Test Case 2", async ({ page }) => {
    console.log("Executing Test Case 2");
    expect(10).toBe(10);
  });

});