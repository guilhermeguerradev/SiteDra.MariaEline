import { expect, test } from "@playwright/test";

const secoes = [
  ["Tratamentos", "tratamentos"],
  ["Sobre", "sobre"],
  ["Família", "familia"],
  ["Depoimentos", "depoimentos"],
  ["Dúvidas", "duvidas"],
  ["Contato", "contato"],
] as const;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("no desktop, o link leva a seção para logo abaixo do cabeçalho ou a centraliza", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "desktop", "só no desktop");
  for (const [rotulo, id] of secoes) {
    await page
      .getByRole("banner")
      .getByRole("link", { name: rotulo, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await page.waitForTimeout(1500);
    const m = await page.evaluate((id) => {
      const s = document.getElementById(id)!.getBoundingClientRect();
      const cabecalho = document
        .querySelector("header")!
        .getBoundingClientRect();
      return {
        topo: s.top,
        altura: s.height,
        cabecalho: cabecalho.bottom,
        tela: window.innerHeight,
      };
    }, id);
    // Nunca fica escondida atrás do cabeçalho.
    expect(m.topo, `${id}: começo escondido`).toBeGreaterThanOrEqual(
      m.cabecalho - 3,
    );
    // Seção alta: encostada no cabeçalho. Seção baixa: centralizada.
    const livre = m.tela - m.cabecalho;
    const esperado = m.cabecalho + Math.max(0, (livre - m.altura) / 2);
    expect(Math.abs(m.topo - esperado), `${id}: posição`).toBeLessThanOrEqual(
      6,
    );
  }
});

test("no celular, o título da seção aparece abaixo do cabeçalho, sem ser cortado", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile-360", "só no celular");
  for (const [rotulo, id] of secoes) {
    await page.getByRole("button", { name: "Menu" }).click();
    await page
      .locator("#menu-mobile")
      .getByRole("link", { name: rotulo, exact: true })
      .click();
    await page.waitForTimeout(1500);
    const m = await page.evaluate((id) => {
      const secao = document.getElementById(id)!;
      const titulo = [...secao.querySelectorAll("h2")].find(
        (h) => (h as HTMLElement).offsetParent !== null,
      )!;
      return {
        titulo: titulo.getBoundingClientRect().top,
        cabecalho: document.querySelector("header")!.getBoundingClientRect()
          .bottom,
      };
    }, id);
    expect(m.titulo, `${id}: título escondido`).toBeGreaterThanOrEqual(
      m.cabecalho,
    );
  }
});
