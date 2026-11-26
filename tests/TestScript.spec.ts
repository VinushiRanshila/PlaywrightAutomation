
import { test, expect } from '@playwright/test';

// SauceDemo Login Details
const username = 'standard_user';
const password = 'secret_sauce';

// Reusable slow wait function
async function slowWait(page) {
    await page.waitForTimeout(1000);
}

test.describe('SauceDemo Automation Testing', () => {

    test('Verify Checkout Process', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await slowWait(page);

        await page.locator('#user-name').fill(username);
        await slowWait(page);

        await page.locator('#password').fill(password);
        await slowWait(page);

        await page.locator('#login-button').click();
        await slowWait(page);

        // Add product
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await slowWait(page);

        // Open cart
        await page.locator('.shopping_cart_link').click();
        await slowWait(page);

        // Checkout
        await page.locator('[data-test="checkout"]').click();
        await slowWait(page);

        // Enter customer details
        await page.locator('[data-test="firstName"]').fill('Vinushi');
        await slowWait(page);

        await page.locator('[data-test="lastName"]').fill('Ranshila');
        await slowWait(page);

        await page.locator('[data-test="postalCode"]').fill('11000');
        await slowWait(page);

        await page.locator('[data-test="continue"]').click();
        await slowWait(page);

        // Verify checkout overview
        await expect(page.locator('.title')).toHaveText('Checkout: Overview');
        await slowWait(page);

        // Finish order
        await page.locator('[data-test="finish"]').click();
        await slowWait(page);

        // Verify successful order
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
        await slowWait(page);

    });


});
