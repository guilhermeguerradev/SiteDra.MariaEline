import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  buscarTratamento,
  gruposTratamentos,
  mensagemTratamento,
  tratamentos,
} from "@/src/content/tratamentos";

// Lê o próprio PRD: "N. **Título:** descrição".
function tratamentosDoPrd() {
  const prd = readFileSync("docs/prd.md", "utf8");
  const partes = prd.split("### Textos já prontos dos tratamentos");
  if (partes.length < 2) {
    throw new Error(
      'A seção "Textos já prontos dos tratamentos" não foi encontrada em docs/prd.md',
    );
  }
  const bloco = partes[1];
  const achados = [...bloco.matchAll(/^\d+\. \*\*(.+?):\*\* (.+)$/gm)];
  return achados.map(([, titulo, descricao]) => ({
    titulo,
    descricao: descricao.trim(),
  }));
}

describe("tratamentos", () => {
  it("são 8, com ids únicos", () => {
    expect(tratamentos).toHaveLength(8);
    expect(new Set(tratamentos.map((tratamento) => tratamento.id)).size).toBe(
      8,
    );
  });

  it("têm os textos idênticos ao PRD, na mesma ordem", () => {
    const doPrd = tratamentosDoPrd();
    expect(doPrd).toHaveLength(8);
    expect(
      tratamentos.map(({ titulo, descricao }) => ({ titulo, descricao })),
    ).toEqual(doPrd);
  });

  it("não têm título nem descrição vazios", () => {
    for (const tratamento of tratamentos) {
      expect(tratamento.titulo.trim()).not.toBe("");
      expect(tratamento.descricao.trim()).not.toBe("");
    }
  });
});

describe("tratamentos no celular", () => {
  it("os 3 grupos cobrem os 8 serviços, sem repetir", () => {
    const ids = gruposTratamentos.flatMap((grupo) => grupo.ids);
    expect(ids).toHaveLength(8);
    expect(new Set(ids).size).toBe(8);
    expect([...ids].sort()).toEqual(
      tratamentos.map((tratamento) => tratamento.id).sort(),
    );
  });

  it("todo tratamento tem título e frase curtos", () => {
    for (const tratamento of tratamentos) {
      expect(tratamento.versaoCurta.titulo.trim()).not.toBe("");
      expect(tratamento.versaoCurta.descricao.trim()).not.toBe("");
    }
  });

  it("a mensagem inicial do WhatsApp cita o tratamento", () => {
    expect(mensagemTratamento(buscarTratamento("prevencao"))).toBe(
      "Olá, Dra. Maria Eline! Gostaria de saber mais sobre check-up.",
    );
  });
});
