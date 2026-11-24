import { expect, test } from "@playwright/test";
import { dadosDeContato } from "@/src/content/dadosDeContato";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("o rodapé mostra CRO, aviso, contatos e direitos", async ({ page }) => {
  const rodape = page.getByRole("contentinfo");
  await expect(rodape).toContainText("CRO-MG 64493");
  await expect(rodape).toContainText("Atendimento particular, sem convênios");
  await expect(rodape).toContainText("Responsável técnica");
  await expect(rodape).toContainText("Todos os direitos reservados");
  await expect(
    rodape.getByRole("link", { name: "(32) 98874-7651" }),
  ).toHaveAttribute("href", `tel:+${dadosDeContato.whatsapp}`);
  await expect(
    rodape.getByRole("link", { name: dadosDeContato.email }),
  ).toHaveAttribute("href", `mailto:${dadosDeContato.email}`);
  await expect(rodape.getByRole("link", { name: "Instagram" })).toHaveAttribute(
    "href",
    dadosDeContato.instagram,
  );
});

test("o rodapé só lista seções que existem", async ({ page }) => {
  const menu = page.getByRole("contentinfo").getByRole("navigation");
  const links = menu.getByRole("link");
  await expect(links).toHaveText([
    "Tratamentos",
    "Sobre",
    "Família",
    "Depoimentos",
    "Dúvidas",
    "Contato",
  ]);
  const destinos = await links.evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")),
  );
  expect(destinos).toEqual([
    "#tratamentos",
    "#sobre",
    "#familia",
    "#depoimentos",
    "#duvidas",
    "#contato",
  ]);
});

test("o rodapé cabe na tela, sem rolagem horizontal", async ({ page }) => {
  await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
