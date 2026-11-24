import { expect, test } from "@playwright/test";
import { dadosDeContato } from "@/src/content/dadosDeContato";

const linkWhatsapp = `https://wa.me/${dadosDeContato.whatsapp}`;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a seção Tratamentos mostra os 8 serviços com o texto do PRD", async ({
  page,
}, info) => {
  test.skip(info.project.name === "mobile-360", "o celular tem outro layout");
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

test("no celular, Tratamentos mostra 3 grupos e 8 cartões que abrem o WhatsApp", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile-360", "só no celular");
  const secao = page.locator("#tratamentos");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Cuidado completo, do check-up à reabilitação",
  );
  await expect(secao.getByRole("heading", { level: 3 })).toHaveText([
    "Prevenção",
    "Restaurações e cuidados",
    "Reabilitação",
  ]);
  const cartoes = secao.getByRole("link");
  await expect(cartoes).toHaveCount(8);
  await expect(cartoes.first()).toContainText("Check-up");
  await expect(cartoes.first()).toContainText("Agir antes de qualquer dor.");
  await expect(cartoes.last()).toContainText("Clareamento");
  for (const href of await cartoes.evaluateAll((els) =>
    els.map((el) => el.getAttribute("href") ?? ""),
  )) {
    expect(href.startsWith(`${linkWhatsapp}?text=`)).toBe(true);
  }
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
