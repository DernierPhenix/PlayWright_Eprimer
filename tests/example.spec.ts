import { test, expect } from '@playwright/test';

test('ouvrir la page du site', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Eprimer/);

  //Simuler l'ouverture du lien Alan Richardson, eviltester dans un nouvel onglet comme si on appuyait sur le bouton central de la souris
  await page.getByRole('link', { name: 'Alan Richardson, eviltester' }).click({
    button: 'middle'
  })
  // Attendre 10 secondes
  await page.waitForTimeout(5000);

  await page.getByRole('link', { name: 'e-prime' }).click({

    button: 'middle'
  });
  // Ouvre un lien dans un nouvel onglet et attend que le nouvel onglet soit ouvert
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'e-prime' }).click();
  // const page1 = await page1Promise;

  // Attendre 5 secondes
  await page.waitForTimeout(5000);
});

  //Cas Non Passant

test('saisir des caractères spéciaux', async ({ page }) => {
  await page.goto('https://exploratorytestingacademy.com/app/');
  await page.waitForTimeout(5000);
  // Liste des caractères spéciaux
  const specialChars = ['&', 'é', '"', "'", '(', ')', '-', 'è', '_', 'ç', 'à', '=', '~', ';', ':', '#', '{', '[', '|', '`', '\\', '^', '@'];

  // Le texte à remplir dans le champ
  const inputText = 'To be, am, is, was, were, been, being, be';

  // Vérifier si le texte contient un caractère spécial de la liste
  const containsSpecialChar = inputText.split('').some(char => specialChars.includes(char));

  if (containsSpecialChar) {
    console.error('Erreur : Des caractères spéciaux ont été saisis!');
  } else {
    await page.getByRole('textbox', { name: 'Text:' }).fill(inputText);
    await page.getByRole('button', { name: 'Check For E-Prime' }).click();
    await expect(page.getByText(inputText)).toBeVisible();
  }
});
    


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// await expect(page.locator('xpath').nth(0)).toHaveText('nombre');