import { describe, expect, it } from "vitest";
import { cabecalho } from "@/src/content/cabecalho";

describe("textos do cabeçalho", () => {
  it("mantém o texto do cabeçalho do design", () => {
    expect(cabecalho.nome).toBe("Dra. Maria Eline Muniz");
    expect(cabecalho.descricao).toBe("Cirurgiã-Dentista | Saúde da Família");
  });
});
