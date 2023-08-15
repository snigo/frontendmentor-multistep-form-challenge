import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  const name = await page.innerText('h1');
  expect(name).toBe('Hello, Next.js!');
});
