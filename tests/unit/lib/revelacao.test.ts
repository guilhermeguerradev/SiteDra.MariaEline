import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  CLASSE_ANIMACAO_LIGADA,
  CLASSE_BLOCO_VISIVEL,
  CLASSES_DE_REVELACAO,
  SELETOR_DOS_REVELAVEIS,
} from "@/src/lib/revelacao";

const css = readFileSync("src/styles/animacoes-rolagem.css", "utf8");

describe("animação ao rolar", () => {
  it("o seletor reúne todas as classes de revelação", () => {
    expect(SELETOR_DOS_REVELAVEIS.split(", ")).toEqual([
      ".revelar",
      ".revelar-foto",
      ".animar-rotulo",
      ".desenhar-linha",
    ]);
  });

  it("o CSS usa cada classe de revelação", () => {
    for (const classe of Object.values(CLASSES_DE_REVELACAO)) {
      expect(css, `classe .${classe}`).toContain(`.${classe}`);
    }
  });

  it("o CSS usa as classes de estado da página e do bloco", () => {
    expect(css).toContain(`.${CLASSE_ANIMACAO_LIGADA}`);
    expect(css).toContain(`.${CLASSE_BLOCO_VISIVEL}`);
  });
});
