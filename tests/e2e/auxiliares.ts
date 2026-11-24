import { expect, type Page } from "@playwright/test";

// Confere que cada imagem visível da seção carregou de verdade e tem texto
// alternativo. Devolve quantas imagens visíveis a seção tem.
export async function imagensCarregam(page: Page, seletorDaSecao: string) {
  const imagens = page.locator(`${seletorDaSecao} img:visible`);
  const total = await imagens.count();
  for (let i = 0; i < total; i++) {
    const imagem = imagens.nth(i);
    await imagem.scrollIntoViewIfNeeded();
    await expect
      .poll(() => imagem.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
    await expect(imagem).toHaveAttribute("alt", /\S/);
  }
  return total;
}

// Sem rolagem para os lados depois de levar a seção à tela.
export async function semRolagemLateral(page: Page, seletorDaSecao: string) {
  await page.locator(seletorDaSecao).scrollIntoViewIfNeeded();
  const { rolagem, largura } = await page.evaluate(() => ({
    rolagem: document.documentElement.scrollWidth,
    largura: document.documentElement.clientWidth,
  }));
  expect(rolagem).toBeLessThanOrEqual(largura);
}
