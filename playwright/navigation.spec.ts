import { expect, test } from '@playwright/test';

test('Navigate and check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('intro')).toBeVisible();
  await expect(page.getByTestId('projects')).toBeVisible();
  await expect(page.getByTestId('about')).toBeVisible();
  await expect(page.getByTestId('contact')).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
  await page.waitForURL('/#about');
  await expect(page.getByTestId('about')).toBeInViewport();

  await page.getByRole('link', { name: 'Projects' }).click();
  await page.waitForURL('/#projects');
  await expect(page.getByTestId('projects')).toBeInViewport();

  await page.getByRole('link', { name: 'Contact' }).click();
  await page.waitForURL('/#contact');
  await expect(page.getByTestId('contact')).toBeInViewport();
});
