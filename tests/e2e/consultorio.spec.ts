import { expect, test } from "@playwright/test";
import { imagensCarregam, semRolagemLateral } from "./auxiliares";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
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
  expect(await imagensCarregam(page, "#consultorio")).toBe(5);
});

test("a seção Consultório cabe na tela, sem rolagem horizontal", async ({
  page,
}) => {
  await semRolagemLateral(page, "#consultorio");
});
