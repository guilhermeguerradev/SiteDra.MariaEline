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

test("no desktop, o título da seção aparece abaixo do cabeçalho, sem ser cortado", async ({
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
      const secao = document.getElementById(id)!;
      const titulo = [...secao.querySelectorAll("h2")].find(
        (h) => (h as HTMLElement).offsetParent !== null,
      )!;
      const r = titulo.getBoundingClientRect();
      return {
        topo: r.top,
        base: r.bottom,
        cabecalho: document.querySelector("header")!.getBoundingClientRect()
          .bottom,
        tela: window.innerHeight,
      };
    }, id);
    expect(m.topo, `${id}: título escondido`).toBeGreaterThanOrEqual(
      m.cabecalho + 20,
    );
    expect(m.base, `${id}: título fora da tela`).toBeLessThanOrEqual(m.tela);
  }
});

test("no desktop, o início ocupa a altura toda da tela", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "desktop", "só no desktop");
  const { altura, tela } = await page.evaluate(() => ({
    altura: document.getElementById("inicio")!.getBoundingClientRect().height,
    tela: window.innerHeight,
  }));
  expect(altura).toBeGreaterThanOrEqual(tela);
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

// Celular, tablet, notebook e desktop: o início cabe na tela, nada estoura para
// o lado e o título de cada seção aparece abaixo do cabeçalho ao navegar.
const telas = [
  [360, 640],
  [390, 844],
  [768, 1024],
  [1024, 768],
  [1366, 650],
  [1536, 730],
  [1920, 1080],
] as const;

test("em várias telas o início cabe e a navegação não esconde o título", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "desktop", "o tamanho é definido aqui");
  test.setTimeout(180_000);
  for (const [largura, altura] of telas) {
    await page.setViewportSize({ width: largura, height: altura });
    await page.goto("/");
    const inicio = await page.evaluate(() => ({
      altura: document.getElementById("inicio")!.getBoundingClientRect().height,
      tela: window.innerHeight,
      estoura:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    }));
    expect(inicio.altura, `${largura}x${altura}: início`).toBeLessThanOrEqual(
      inicio.tela + 1,
    );
    expect(inicio.estoura, `${largura}x${altura}: rolagem lateral`).toBe(false);

    const celular = largura < 1180;
    for (const [rotulo, id] of secoes) {
      if (celular) await page.getByRole("button", { name: "Menu" }).click();
      await (celular ? page.locator("#menu-mobile") : page.getByRole("banner"))
        .getByRole("link", { name: rotulo, exact: true })
        .click();
      await page.waitForTimeout(1100);
      const m = await page.evaluate((id) => {
        const titulo = [
          ...document.getElementById(id)!.querySelectorAll("h2"),
        ].find((h) => (h as HTMLElement).offsetParent !== null)!;
        return {
          topo: titulo.getBoundingClientRect().top,
          cabecalho: document.querySelector("header")!.getBoundingClientRect()
            .bottom,
        };
      }, id);
      expect(
        m.topo,
        `${largura}x${altura} ${id}: título escondido`,
      ).toBeGreaterThanOrEqual(m.cabecalho);
    }
  }
});
