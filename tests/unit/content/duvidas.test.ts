import { describe, expect, it } from "vitest";
import { perguntas, secaoDuvidas } from "@/src/content/duvidas";
import { secaoExiste } from "@/src/content/navegacao";

describe("seção Dúvidas frequentes", () => {
  it("tem as 5 perguntas do design, sem repetição", () => {
    expect(perguntas).toHaveLength(5);
    expect(new Set(perguntas.map((item) => item.pergunta)).size).toBe(5);
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
