import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Sobre mostra o texto, as credenciais e o CRO", async ({
  page,
}) => {
  const secao = page.locator("#sobre");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Prevenir antes de doer é a minha forma de cuidar.",
  );
  await expect(secao).toContainText(
    "Sou cirurgiã-dentista formada pela UFJF, especialista em Saúde da Família e preceptora na Faculdade Estácio, onde acompanho a formação de novos dentistas.",
  );
  await expect(secao).toContainText(
    "cuido do sorriso de crianças, adolescentes, adultos e idosos com o mesmo carinho.",
  );
  await expect(secao.getByRole("listitem")).toHaveText([
    "Odontologia · UFJF",
    "Especialista em Saúde da Família · UFJF/HU",
    "Aperfeiçoamento em Cirurgia Oral · Suprema",
    "Preceptora · Estácio",
    "CRO-MG 64493",
  ]);
});

test("a foto da seção Sobre carrega e tem texto alternativo", async ({
  page,
}) => {
  const foto = page.locator("#sobre img");
  await expect(foto).toHaveAttribute(
    "alt",
    "Dra. Maria Eline analisando um raio-x",
  );
  await foto.scrollIntoViewIfNeeded();
  await expect
    .poll(() => foto.evaluate((img: HTMLImageElement) => img.naturalWidth))
    .toBeGreaterThan(0);
});

test("o link Sobre do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page.getByRole("banner").getByRole("link", { name: "Sobre" }).click();
  await expect(page).toHaveURL(/#sobre$/);
  await expect(page.locator("#sobre")).toBeInViewport();
});

test("o indicador 'Role para conhecer' do hero leva à seção Sobre", async ({
  page,
}, info) => {
  test.skip(
    info.project.name !== "desktop",
    "o indicador só existe no desktop",
  );
  const indicador = page.getByRole("link", { name: "Role para conhecer" });
  await expect(indicador).toHaveAttribute("href", "#sobre");
  await indicador.click();
  await expect(page).toHaveURL(/#sobre$/);
});

test("a seção Sobre cabe na tela, sem rolagem horizontal", async ({ page }) => {
  await page.locator("#sobre").scrollIntoViewIfNeeded();
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
