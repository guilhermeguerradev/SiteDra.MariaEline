import { describe, expect, it } from "vitest";
import { secaoExiste } from "@/src/content/navegacao";
import { sobre, textoDoParagrafo } from "@/src/content/sobre";

describe("seção Sobre", () => {
  it("usa os textos do design, sem quebrar frases nos destaques", () => {
    expect(sobre.titulo).toBe(
      "Prevenir antes de doer é a minha forma de cuidar.",
    );
    expect(textoDoParagrafo(sobre.paragrafos[0])).toBe(
      "Sou cirurgiã-dentista formada pela UFJF, especialista em Saúde da Família e preceptora na Faculdade Estácio, onde acompanho a formação de novos dentistas.",
    );
    expect(textoDoParagrafo(sobre.paragrafos[1])).toBe(
      "No consultório, sou totalmente dedicada a cada paciente: atendo com atenção, explico cada etapa e cuido do sorriso de crianças, adolescentes, adultos e idosos com o mesmo carinho.",
    );
  });

  it("lista as quatro credenciais do design e o CRO", () => {
    expect(sobre.credenciais).toEqual([
      "Odontologia · UFJF",
      "Especialista em Saúde da Família · UFJF/HU",
      "Aperfeiçoamento em Cirurgia Oral · Suprema",
      "Preceptora · Estácio",
    ]);
    expect(sobre.registro).toBe("CRO-MG 64493");
  });

  it("tem foto com texto alternativo", () => {
    expect(sobre.foto.alt.trim()).not.toBe("");
    expect(sobre.foto.src.startsWith("/images/")).toBe(true);
  });

  it("entra na navegação", () => {
    expect(secaoExiste("sobre")).toBe(true);
  });
});
