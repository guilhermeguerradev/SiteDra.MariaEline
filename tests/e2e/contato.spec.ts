import { expect, test } from "@playwright/test";
import { dadosDeContato } from "@/src/content/dadosDeContato";

const linkWhatsapp = `https://wa.me/${dadosDeContato.whatsapp}`;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Contato mostra o agendamento e os dados", async ({ page }) => {
  const secao = page.locator("#contato");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Vamos cuidar do sorriso da sua família?",
  );
  await expect(secao).toContainText(
    "Atendo com hora marcada e horários flexíveis",
  );
  await expect(secao).toContainText("Prédio Empório Bahamas");
  await expect(secao).toContainText("Sala 1007");
  await expect(secao).toContainText("Centro, Juiz de Fora – MG");
  await expect(
    secao.getByRole("link", { name: "Agendar pelo WhatsApp" }),
  ).toHaveAttribute("href", linkWhatsapp);
  await expect(
    secao.getByRole("link", { name: "(32) 98874-7651" }),
  ).toHaveAttribute("href", linkWhatsapp);
  await expect(
    secao.getByRole("link", { name: dadosDeContato.email }),
  ).toHaveAttribute("href", `mailto:${dadosDeContato.email}`);
  await expect(secao.getByRole("link", { name: "Instagram" })).toHaveAttribute(
    "href",
    dadosDeContato.instagram,
  );
});

test("o mapa tem título, vem do Google e o link de rota funciona", async ({
  page,
}) => {
  const mapa = page.locator("#contato iframe:visible");
  await expect(mapa).toHaveAttribute("title", "Localização do consultório");
  await expect(mapa).toHaveAttribute("loading", "lazy");
  await expect(mapa).toHaveAttribute(
    "src",
    /^https:\/\/www\.google\.com\/maps\/embed/,
  );
  await expect(
    page.locator("#contato").getByRole("link", { name: /Abrir rota/ }),
  ).toHaveAttribute("href", /^https:\/\/www\.google\.com\/maps\/search\//);
});

test("o link Contato do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page.getByRole("banner").getByRole("link", { name: "Contato" }).click();
  await expect(page).toHaveURL(/#contato$/);
  await expect(page.locator("#contato")).toBeInViewport();
});

test("a seção Contato cabe na tela, sem rolagem horizontal", async ({
  page,
}) => {
  await page.locator("#contato").scrollIntoViewIfNeeded();
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
