import { expect, test } from "@playwright/test";
import { imagensCarregam, semRolagemLateral } from "./auxiliares";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

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

test("a seção Resultados cabe na tela, sem rolagem horizontal", async ({
  page,
}) => {
  await semRolagemLateral(page, "#resultados");
});
