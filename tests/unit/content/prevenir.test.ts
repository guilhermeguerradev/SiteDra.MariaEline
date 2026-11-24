import { describe, expect, it } from "vitest";
import { beneficios, secaoPrevenir } from "@/src/content/prevenir";

describe("seção Por que prevenir?", () => {
  it("tem o título e os 4 benefícios do design, numerados", () => {
    expect(secaoPrevenir.titulo).toBe(
      "O cuidado de hoje é o sorriso de amanhã.",
    );
    expect(beneficios.map((beneficio) => beneficio.numero)).toEqual([
      "01",
      "02",
      "03",
      "04",
    ]);
    expect(beneficios.map((beneficio) => beneficio.titulo)).toEqual([
      "Evita dor",
      "Evita tratamentos maiores",
      "Economiza",
      "Sorriso saudável por mais tempo",
    ]);
  });

  it("não tem texto vazio", () => {
    for (const beneficio of beneficios) {
      expect(beneficio.descricao.trim()).not.toBe("");
    }
  });
});
