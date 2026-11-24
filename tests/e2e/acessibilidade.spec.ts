import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("com redução de movimento o conteúdo continua visível", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Agendar consulta/ }),
  ).toBeVisible();
});

test("não tem violações de acessibilidade WCAG A e AA (axe)", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const resultado = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(resultado.violations).toEqual([]);
});

test("o teclado alcança os botões e mostra o foco", async ({ page }) => {
  await page.keyboard.press("Tab");
  const primeiro = page.locator(":focus");
  await expect(primeiro).toHaveAttribute("href", "#inicio");
  const contorno = await primeiro.evaluate(
    (el) => getComputedStyle(el).outlineStyle,
  );
  expect(contorno).not.toBe("none");

  // O menu tem um link por seção, então o WhatsApp chega depois deles.
  // Percorre até 15 elementos e exige achar o WhatsApp.
  const alcancados: string[] = [];
  for (let i = 0; i < 15; i++) {
    const rotulo = await page.evaluate(
      () => document.activeElement?.getAttribute("href") ?? "",
    );
    alcancados.push(rotulo);
    if (rotulo.startsWith("https://wa.me/")) break;
    await page.keyboard.press("Tab");
  }
  expect(alcancados.some((h) => h.startsWith("https://wa.me/"))).toBe(true);
});

test("imagens têm texto alternativo", async ({ page }) => {
  const semAlt = await page
    .locator("img:not([alt]), img[alt='']")
    .evaluateAll((els) => els.length);
  expect(semAlt).toBe(0);
});
