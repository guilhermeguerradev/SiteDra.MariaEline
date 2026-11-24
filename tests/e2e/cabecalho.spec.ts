import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("no celular, o menu abre, fecha com Escape e informa o estado", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile-360", "só no celular");
  const botao = page.getByRole("button", { name: "Menu" });
  await expect(botao).toHaveAttribute("aria-expanded", "false");
  await botao.click();
  await expect(botao).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.locator("#menu-mobile").getByRole("link", { name: "Tratamentos" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(botao).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#menu-mobile")).toHaveCount(0);
});

test("no desktop não há botão de menu", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop", "só no desktop");
  await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
  await expect(page.getByRole("banner").getByRole("navigation")).toBeVisible();
});

test("a altura do cabeçalho depois de rolar bate com --altura-cabecalho", async ({
  page,
}) => {
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(600);
  const { altura, token } = await page.evaluate(() => ({
    altura: document.querySelector("header")!.getBoundingClientRect().height,
    token: parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--altura-cabecalho",
      ),
    ),
  }));
  expect(Math.abs(altura - token)).toBeLessThanOrEqual(1);
});
