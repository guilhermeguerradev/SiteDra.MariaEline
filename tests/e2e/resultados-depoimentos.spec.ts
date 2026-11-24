import { expect, test, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

async function imagensCarregam(page: Page, id: string) {
  const imagens = page.locator(`${id} img:visible`);
  const total = await imagens.count();
  for (let i = 0; i < total; i++) {
    const img = imagens.nth(i);
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
    await expect(img).toHaveAttribute("alt", /\S/);
  }
  return total;
}

test("a seção Resultados mostra o clareamento e os casos", async ({
  page,
}, info) => {
  const secao = page.locator("#resultados");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Sorrisos cuidados no consultório",
  );
  await expect(secao).toContainText(
    "Resultado de apenas 1 semana de clareamento caseiro",
  );
  await expect(secao).toContainText("Limpeza · antes e depois");
  await expect(secao).toContainText("Restaurações");
  await expect(secao).toContainText("Extração de sisos");
  // Desktop: par + antes + depois + 3 casos. Celular: antes + depois + 3 casos.
  const esperadas = info.project.name === "mobile-360" ? 5 : 6;
  expect(await imagensCarregam(page, "#resultados")).toBe(esperadas);
});

test("a seção Resultados não mostra o tratamento de cárie em andamento", async ({
  page,
}) => {
  await expect(page.locator("#resultados")).not.toContainText("cárie");
  await expect(page.locator("#resultados img[src*='carie']")).toHaveCount(0);
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

test("as seções novas cabem na tela, sem rolagem horizontal", async ({
  page,
}) => {
  for (const id of ["#resultados", "#depoimentos"]) {
    await page.locator(id).scrollIntoViewIfNeeded();
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  }
});
