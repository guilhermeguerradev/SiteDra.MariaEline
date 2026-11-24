import { describe, expect, it } from "vitest";
import { inicio } from "@/src/content/inicio";

describe("textos do início (PRD, seção 4.1)", () => {
  it("são idênticos ao PRD", () => {
    expect(inicio.selo).toBe("Cirurgiã-Dentista · Saúde da Família");
    expect(inicio.tituloLeve).toBe("Maria Eline");
    expect(inicio.titulo).toBe("Muniz");
    expect(inicio.frase).toBe(
      "Cuidado preventivo para o sorriso de toda a sua família, em todas as fases da vida.",
    );
    expect(inicio.chips).toEqual([
      "Atendimento para toda a família",
      "Foco em prevenção",
    ]);
  });
});
