import AxeBuilder from "@axe-core/playwright";
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

  const alcancados = new Set<string>();
  for (let i = 0; i < 6; i++) {
    const rotulo = await page.evaluate(
      () => document.activeElement?.getAttribute("href") ?? "",
    );
    alcancados.add(rotulo);
    await page.keyboard.press("Tab");
  }
  expect([...alcancados].some((h) => h.startsWith("https://wa.me/"))).toBe(
    true,
  );
});

test("imagens têm texto alternativo", async ({ page }) => {
  const semAlt = await page
    .locator("img:not([alt]), img[alt='']")
    .evaluateAll((els) => els.length);
  expect(semAlt).toBe(0);
});

test("o rodapé mostra CRO, aviso, contatos e direitos", async ({ page }) => {
  const rodape = page.getByRole("contentinfo");
  await expect(rodape).toContainText("CRO-MG 64493");
  await expect(rodape).toContainText("Atendimento particular, sem convênios");
  await expect(rodape).toContainText("Responsável técnica");
  await expect(rodape).toContainText("Todos os direitos reservados");
  await expect(
    rodape.getByRole("link", { name: "(32) 98874-7651" }),
  ).toHaveAttribute("href", `tel:+${contatos.whatsapp}`);
  await expect(
    rodape.getByRole("link", { name: contatos.email }),
  ).toHaveAttribute("href", `mailto:${contatos.email}`);
  await expect(rodape.getByRole("link", { name: "Instagram" })).toHaveAttribute(
    "href",
    contatos.instagram,
  );
});

test("o rodapé só lista seções que existem", async ({ page }) => {
  const menu = page.getByRole("contentinfo").getByRole("navigation");
  const links = menu.getByRole("link");
  await expect(links).toHaveText(["Tratamentos", "Contato"]);
  const destinos = await links.evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")),
  );
  expect(destinos).toEqual(["#tratamentos", "#contato"]);
});

test("a seção Tratamentos mostra os 8 serviços com o texto do PRD", async ({
  page,
}) => {
  const secao = page.locator("#tratamentos");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Cuidado completo, do check-up à reabilitação",
  );
  await expect(secao.getByRole("heading", { level: 3 })).toHaveCount(8);
  await expect(secao.getByRole("listitem")).toHaveCount(8);
  await expect(secao).toContainText("Prevenção e check-up");
  await expect(secao).toContainText(
    "Consultas regulares para acompanhar a saúde bucal e agir antes de qualquer dor.",
  );
  await expect(secao).toContainText("Extrações, inclusive de sisos");
  await expect(secao).toContainText("Clareamento dental");
  await expect(
    secao.getByRole("link", { name: "Agendar avaliação +" }),
  ).toHaveAttribute("href", linkWhatsapp);
});

test("o link Tratamentos do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Tratamentos" })
    .click();
  await expect(page).toHaveURL(/#tratamentos$/);
  await expect(page.locator("#tratamentos")).toBeInViewport();
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

test("o rodapé cabe na tela, sem rolagem horizontal", async ({ page }) => {
  await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
