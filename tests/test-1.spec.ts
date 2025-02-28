import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');
  await page.getByRole('link', { name: 'Alan Richardson, eviltester' }).click({
    button: 'middle'
  });
  await page.goto('https://github.com/eviltester/TestingApp');
  await page.getByRole('link', { name: 'e-prime' }).click({
    button: 'middle'
  });
  await page.getByRole('textbox', { name: 'Text:' }).click();
  await page.getByRole('textbox', { name: 'Text:' }).fill('&é"\'(-è_çà)=~#{[|`\\^@]}');
  await page.getByRole('button', { name: 'Check For E-Prime' }).click();
});