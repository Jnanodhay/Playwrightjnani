import { test, expect } from '@playwright/test';

test.afterEach(() => {
  console.log("Print after Each test");
});

test.describe("Group 1", () => {

  test("test case 1", async () => {
    console.log("test case 1");
    expect(5).toBe(5);
  });

  test("test case 2", async () => {
    console.log("test case 2");
  });

  test("test case 3", async () => {
    console.log("test case 3");
  });

  test("test case 4", async () => {
    console.log("test case 4");
  });

});