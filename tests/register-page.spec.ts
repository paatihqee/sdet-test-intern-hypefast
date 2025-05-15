import { test, expect } from "@playwright/test";

// Test Case 01
test("TC01 - Successful registration with all valid inputs", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__name").fill("Adillah Fatih");
  await page.getByTestId("register__text-field__phone-number").fill("8123456789");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih@fatih.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  await page.getByTestId("register__checkbox__tnc").check();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByText("Akunmu selesai dibuat!")).toBeVisible();
});

// Test Case 02
test("TC02 - Phone number less than 10 digits should trigger error", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__name").fill("Adillah Fatih");
  await page.getByTestId("register__text-field__phone-number").fill("81234");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih-handmade@email.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  await page.getByTestId("register__checkbox__tnc").check();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByTestId("register__text-field__phone-number__error")).toHaveText("Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.");
});

// Test Case 03
test("TC03 - Phone number more than 12 digits should trigger error", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__name").fill("Adillah Fatih");
  await page.getByTestId("register__text-field__phone-number").fill("8123456789123456");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih-handmade@email.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  await page.getByTestId("register__checkbox__tnc").check();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByTestId("register__text-field__phone-number__error")).toHaveText("Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.");
});

// Test Case 04
test("TC04 - Show error when 'Nama' field is empty", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__phone-number").fill("8123456789");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih-handmade@example.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  await page.getByTestId("register__checkbox__tnc").check();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByTestId("register__text-field__name__error")).toHaveText("Wajib diisi.");
});

// Test Case 05
test("TC05 - Show error when email is invalid", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__phone-number").fill("8123456789");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih@");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  await page.getByTestId("register__checkbox__tnc").check();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByTestId("register__text-field__email__error")).toHaveText("Harap isi dengan format yang benar.");
});
7;
// Test case 06
test("TC06 - Show error when password and confirmation do not match", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__name").fill("Adillah Fatih");
  await page.getByTestId("register__text-field__phone-number").fill("8123456789");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih-handmade@example.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("DifferentPassword");
  await page.getByTestId("register__checkbox__tnc").click();
  await page.getByTestId("register__button__sign-up").click();

  await expect(page.getByTestId("register__text-field__confirm-password__error")).toHaveText("Belum sesuai dengan kata sandi.");
});

// Test case 07
test("TC07 - Form cannot be submitted if checkbox is not checked", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__text-field__name").fill("Adillah Fatih");
  await page.getByTestId("register__text-field__phone-number").fill("8123456789");
  await page.getByTestId("register__text-field__business-name").fill("Fatih Handmade");
  await page.getByTestId("register__text-field__email").fill("fatih-handmade@example.com");
  await page.getByTestId("register__text-field__password").fill("CobaPassword123");
  await page.getByTestId("register__text-field__confirm-password").fill("CobaPassword123");
  await page.getByTestId("register__radio-button__distributor").check();
  // Do not check the T&C checkbox

  const button = page.getByTestId("register__button__sign-up");
  await expect(button).toBeDisabled(); // atau: pastikan form tidak lanjut
});

// Test case 08
test("TC08 - Show all errors when all fields are empty but checkbox is checked", async ({ page }) => {
  await page.goto("https://dashboard.melaka.app/register");

  await page.getByTestId("register__checkbox__tnc").check();

  await page.getByTestId("register__button__sign-up").click();

  const errorExpectations: { testId: string; expectedText: string }[] = [
    { testId: "register__text-field__name__error", expectedText: "Wajib diisi" },
    { testId: "register__text-field__phone-number__error", expectedText: "Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter." },
    { testId: "register__text-field__business-name__error", expectedText: "Wajib diisi" },
    { testId: "register__text-field__email__error", expectedText: "Wajib diisi" },
    { testId: "register__text-field__password__error", expectedText: "Wajib diisi" },
    { testId: "register__text-field__confirm-password__error", expectedText: "Wajib diisi" },
  ];

  for (const { testId, expectedText } of errorExpectations) {
    await expect(page.getByTestId(testId)).toContainText(expectedText);
  }
});
