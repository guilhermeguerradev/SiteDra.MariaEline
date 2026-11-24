import { expect, test } from "@playwright/test";
import { dadosDeContato } from "@/src/content/dadosDeContato";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Por que prevenir? mostra os 4 benefícios", async ({ page }) => {
  const secao = page.locator("#prevenir");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "O cuidado de hoje é o sorriso de amanhã.",
  );
  await expect(secao.getByRole("heading", { level: 3 })).toHaveText([
    "Evita dor",
    "Evita tratamentos maiores",
    "Economiza",
    "Sorriso saudável por mais tempo",
  ]);
  await expect(secao.getByRole("listitem")).toHaveCount(4);
});

test("as dúvidas abrem e fecham com o teclado, uma de cada vez", async ({
  page,
}) => {
  const secao = page.locator("#duvidas");
  const itens = secao.locator("details");
  await expect(itens).toHaveCount(5);

  // A primeira começa aberta, como no design.
  await expect(itens.nth(0)).toHaveAttribute("open", "");
  await expect(itens.nth(1)).not.toHaveAttribute("open", "");

  // Abre a terceira pelo teclado: foca o resumo e aperta Enter.
  const terceira = itens.nth(2).locator("summary");
  await terceira.focus();
  await page.keyboard.press("Enter");
  await expect(itens.nth(2)).toHaveAttribute("open", "");
  await expect(
    itens
      .nth(2)
      .getByText(
        "O procedimento é feito com anestesia, então você não sente dor durante.",
        { exact: false },
      ),
  ).toBeVisible();

  // Só uma aberta por vez (atributo name no details).
  await expect(itens.nth(0)).not.toHaveAttribute("open", "");

  // Fecha de novo com a barra de espaço.
  await page.keyboard.press("Space");
  await expect(itens.nth(2)).not.toHaveAttribute("open", "");
});

test("o link do WhatsApp da seção Dúvidas usa o número configurado", async ({
  page,
}) => {
  await expect(
    page.locator("#duvidas").getByRole("link", { name: "WhatsApp" }),
  ).toHaveAttribute("href", `https://wa.me/${dadosDeContato.whatsapp}`);
});

test("o link Dúvidas do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page.getByRole("banner").getByRole("link", { name: "Dúvidas" }).click();
  await expect(page).toHaveURL(/#duvidas$/);
  await expect(page.locator("#duvidas")).toBeInViewport();
});

test("as seções novas cabem na tela, sem rolagem horizontal", async ({
  page,
}) => {
  for (const id of ["#prevenir", "#duvidas"]) {
    await page.locator(id).scrollIntoViewIfNeeded();
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  }
});
