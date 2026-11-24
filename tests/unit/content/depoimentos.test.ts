import { describe, expect, it } from "vitest";
import { depoimentos, secaoDepoimentos } from "@/src/content/depoimentos";
import { secaoExiste } from "@/src/content/navegacao";

describe("seção Depoimentos", () => {
  it("tem os 3 depoimentos do design, sem nomes de pessoas", () => {
    expect(secaoDepoimentos.titulo).toBe("O que dizem as famílias");
    expect(depoimentos).toHaveLength(3);
    expect(depoimentos.map((depoimento) => depoimento.autor)).toEqual([
      "Paciente · placa de bruxismo e limpeza",
      "Paciente · via WhatsApp",
      "Filha de paciente · via Instagram",
    ]);
  });

  it("não vazam arroba nem perfil de terceiros", () => {
    for (const depoimento of depoimentos) {
      expect(depoimento.texto).not.toMatch(/@/);
      expect(depoimento.autor).not.toMatch(/@/);
    }
  });

  it("as duas seções entram na página", () => {
    expect(secaoExiste("resultados")).toBe(true);
    expect(secaoExiste("depoimentos")).toBe(true);
  });
});

describe("depoimentos no celular", () => {
  it("têm texto e não vazam arroba nem nome de terceiros", () => {
    expect(depoimentos).toHaveLength(3);
    for (const depoimento of depoimentos) {
      expect(depoimento.versaoCurta.texto.trim()).not.toBe("");
      expect(depoimento.versaoCurta.texto).not.toMatch(/@/);
      expect(depoimento.versaoCurta.autor).not.toMatch(/@/);
    }
  });
});

describe("identificadores dos depoimentos", () => {
  it("são únicos e não vazios", () => {
    const ids = depoimentos.map((depoimento) => depoimento.id);
    expect(ids.every((id) => id.trim() !== "")).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
