import { expect, test } from "@playwright/test";
import { dadosDeContato } from "@/src/content/dadosDeContato";

const linkWhatsapp = `https://wa.me/${dadosDeContato.whatsapp}`;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("todos os botões de WhatsApp abrem o número configurado", async ({
  page,
}) => {
  const links = page.locator('a[href^="https://wa.me/"]');
  expect(await links.count()).toBeGreaterThanOrEqual(2);
  for (const href of await links.evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")),
  )) {
    // Os cartões de tratamento do celular levam uma mensagem inicial.
    expect(
      href === linkWhatsapp || href?.startsWith(`${linkWhatsapp}?text=`),
    ).toBe(true);
  }
});
