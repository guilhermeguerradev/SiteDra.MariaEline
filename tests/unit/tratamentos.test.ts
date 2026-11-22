import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { tratamentos } from "@/src/domain/tratamentos";

// Lê o próprio PRD: "N. **Título:** descrição".
function tratamentosDoPrd() {
  const prd = readFileSync("docs/prd.md", "utf8");
  const bloco = prd.split("### Textos já prontos dos tratamentos")[1] ?? "";
  const achados = [...bloco.matchAll(/^\d+\. \*\*(.+?):\*\* (.+)$/gm)];
  return achados.map(([, titulo, descricao]) => ({
    titulo,
    descricao: descricao.trim(),
  }));
}

describe("tratamentos", () => {
  it("são 8, com ids únicos", () => {
    expect(tratamentos).toHaveLength(8);
    expect(new Set(tratamentos.map((t) => t.id)).size).toBe(8);
  });

  it("têm os textos idênticos ao PRD, na mesma ordem", () => {
    const doPrd = tratamentosDoPrd();
    expect(doPrd).toHaveLength(8);
    expect(
      tratamentos.map(({ titulo, descricao }) => ({ titulo, descricao })),
    ).toEqual(doPrd);
  });

  it("não têm título nem descrição vazios", () => {
    for (const t of tratamentos) {
      expect(t.titulo.trim()).not.toBe("");
      expect(t.descricao.trim()).not.toBe("");
    }
  });
});
