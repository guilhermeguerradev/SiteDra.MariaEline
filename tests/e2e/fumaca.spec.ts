import { expect, test } from "@playwright/test";
import { contatos } from "../../src/domain/contatos";
import { itensNavegacao, secaoExiste } from "../../src/domain/navegacao";

const linkWhatsapp = `https://wa.me/${contatos.whatsapp}`;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a página carrega com título e h1", async ({ page }) => {
  await expect(page).toHaveTitle(/Maria Eline Muniz/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Maria Eline",
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Muniz");
});

test("todos os botões de WhatsApp abrem o número configurado", async ({
  page,
}) => {
  const links = page.locator('a[href^="https://wa.me/"]');
  expect(await links.count()).toBeGreaterThanOrEqual(2);
  for (const href of await links.evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")),
  )) {
    expect(href).toBe(linkWhatsapp);
  }
});

test("nenhum link interno aponta para seção inexistente", async ({ page }) => {
  const ancoras = await page
    .locator('a[href^="#"]')
    .evaluateAll((els) => els.map((el) => el.getAttribute("href") ?? ""));
  for (const ancora of ancoras) {
    const id = ancora.slice(1);
    await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
  }
});

test("links de seções futuras ficam escondidos", async ({ page }) => {
  for (const item of itensNavegacao) {
    if (secaoExiste(item.secao)) continue;
    await expect(page.locator(`a[href="#${item.secao}"]`)).toHaveCount(0);
  }
});

test("links externos que abrem em nova aba usam noopener", async ({ page }) => {
  const rels = await page
    .locator('a[target="_blank"]')
    .evaluateAll((els) => els.map((el) => el.getAttribute("rel") ?? ""));
  expect(rels.length).toBeGreaterThan(0);
  for (const rel of rels) expect(rel).toContain("noopener");
});

test("expõe dados estruturados Dentist", async ({ page }) => {
  const json = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(json ?? "{}")["@type"]).toBe("Dentist");
});

test("nenhuma imagem PLACEHOLDER é publicada", async ({ page }) => {
  const fontes = await page
    .locator("img")
    .evaluateAll((els) => els.map((el) => el.getAttribute("src") ?? ""));
  for (const src of fontes)
    expect(src.toLowerCase()).not.toContain("placeholder");
});

test("sem rolagem horizontal e com WhatsApp visível", async ({
  page,
}, info) => {
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  await expect(
    page.getByRole("link", { name: "Falar no WhatsApp" }),
  ).toBeInViewport();
  if (info.project.name === "mobile-360") {
    expect(clientWidth).toBe(360);
  }
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
