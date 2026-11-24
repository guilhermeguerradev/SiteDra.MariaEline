import { expect, test } from "@playwright/test";
import { imagensCarregam, semRolagemLateral } from "./auxiliares";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Família mostra os textos e as 2 fotos", async ({ page }) => {
  const secao = page.locator("#familia");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Uma experiência mais tranquila para toda a sua família",
  );
  await expect(secao).toContainText("Seu filho tem medo de dentista?");
  await expect(secao).toContainText(
    "Sua família merece se sentir em casa no consultório.",
  );
  expect(await imagensCarregam(page, "#familia")).toBe(2);
});

test("o link Família do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Família", exact: true })
    .click();
  await expect(page).toHaveURL(/#familia$/);
  await expect(page.locator("#familia")).toBeInViewport();
});

test("a seção Família cabe na tela, sem rolagem horizontal", async ({
  page,
}) => {
  await semRolagemLateral(page, "#familia");
});
