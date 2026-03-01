import { test, expect } from '@playwright/test';

test('Sign-in page is reachable (smoke)', async ({ page }) => {
  await page.goto('https://app.s4e.io/sign-in', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(/sign-in/);
});