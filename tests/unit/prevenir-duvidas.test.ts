import { describe, expect, it } from "vitest";
import { perguntas, secaoDuvidas } from "@/src/domain/duvidas";
import { secaoExiste } from "@/src/domain/navegacao";
import { beneficios, secaoPrevenir } from "@/src/domain/prevenir";

describe("seção Por que prevenir?", () => {
  it("tem o título e os 4 benefícios do design, numerados", () => {
    expect(secaoPrevenir.titulo).toBe(
      "O cuidado de hoje é o sorriso de amanhã.",
    );
    expect(beneficios.map((b) => b.numero)).toEqual(["01", "02", "03", "04"]);
    expect(beneficios.map((b) => b.titulo)).toEqual([
      "Evita dor",
      "Evita tratamentos maiores",
      "Economiza",
      "Sorriso saudável por mais tempo",
    ]);
  });

  it("não tem texto vazio", () => {
    for (const b of beneficios) {
      expect(b.descricao.trim()).not.toBe("");
    }
  });
});

describe("seção Dúvidas frequentes", () => {
  it("tem as 5 perguntas do design, sem repetição", () => {
    expect(perguntas).toHaveLength(5);
    expect(new Set(perguntas.map((p) => p.pergunta)).size).toBe(5);
    expect(perguntas[2].pergunta).toBe("A extração do siso dói?");
    expect(perguntas[3].pergunta).toBe("Clareamento enfraquece os dentes?");
  });

  it("cada pergunta tem resposta", () => {
    for (const p of perguntas) {
      expect(p.pergunta.trim()).not.toBe("");
      expect(p.resposta.trim()).not.toBe("");
    }
  });

  it("monta a frase do WhatsApp igual ao design", () => {
    const frase =
      secaoDuvidas.antesDoLink + secaoDuvidas.link + secaoDuvidas.depoisDoLink;
    expect(frase).toBe(
      "Não encontrou a sua? Mande uma mensagem pelo WhatsApp.",
    );
  });

  it("as duas seções entram na página", () => {
    expect(secaoExiste("prevenir")).toBe(true);
    expect(secaoExiste("duvidas")).toBe(true);
  });
});
