import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

async function fotosCarregam(
  page: import("@playwright/test").Page,
  id: string,
) {
  const imagens = page.locator(`${id} img:visible`);
  const total = await imagens.count();
  for (let i = 0; i < total; i++) {
    const img = imagens.nth(i);
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
    await expect(img).toHaveAttribute("alt", /\S/);
  }
  return total;
}

test("a seção Família mostra os textos e as 2 fotos", async ({ page }) => {
  const secao = page.locator("#familia");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Uma experiência mais tranquila para toda a sua família",
  );
  await expect(secao).toContainText("Seu filho tem medo de dentista?");
  await expect(secao).toContainText(
    "Sua família merece se sentir em casa no consultório.",
  );
  expect(await fotosCarregam(page, "#familia")).toBe(2);
});

test("a seção Consultório mostra o título, o atendimento exclusivo e 5 fotos", async ({
  page,
}) => {
  const secao = page.locator("#consultorio");
  await expect(secao.getByRole("heading", { level: 2 })).toHaveText(
    "Um espaço pensado para você se sentir bem",
  );
  await expect(secao).toContainText(
    "Do agendamento ao retorno, você é atendido sempre por mim.",
  );
  await expect(secao).toContainText(
    "Cirurgiã-Dentista · Saúde da Família · CRO-MG 64493",
  );
  expect(await fotosCarregam(page, "#consultorio")).toBe(5);
});

test("o link Família do menu leva à seção", async ({ page }, info) => {
  if (info.project.name === "mobile-360") {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Família", exact: true })
    .click();
  await expect(page).toHaveURL(/#familia$/);
  await expect(page.locator("#familia")).toBeInViewport();
});

test("as seções novas cabem na tela, sem rolagem horizontal", async ({
  page,
}) => {
  for (const id of ["#familia", "#consultorio"]) {
    await page.locator(id).scrollIntoViewIfNeeded();
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  }
});
