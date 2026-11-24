import { expect, test } from "@playwright/test";
import { semRolagemLateral } from "./auxiliares";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Depoimentos mostra os 3 depoimentos, sem nomes", async ({
  page,
}, info) => {
  const secao = page.locator("#depoimentos");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "O que dizem as famílias",
  );
  await expect(secao.locator("blockquote:visible")).toHaveCount(3);
  // O celular usa a origem abreviada do design.
  await expect(secao).toContainText(
    info.project.name === "mobile-360"
      ? "Paciente · WhatsApp"
      : "Paciente · via WhatsApp",
  );
  await expect(secao).not.toContainText("@");
});

test("o link Depoimentos do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Depoimentos" })
    .click();
  await expect(page).toHaveURL(/#depoimentos$/);
  await expect(page.locator("#depoimentos")).toBeInViewport();
});

test("a seção Depoimentos cabe na tela, sem rolagem horizontal", async ({
  page,
}) => {
  await semRolagemLateral(page, "#depoimentos");
});
