import { describe, expect, it } from "vitest";
import { depoimentos, secaoDepoimentos } from "@/src/content/depoimentos";
import { secaoExiste } from "@/src/content/navegacao";

describe("seção Depoimentos", () => {
  it("tem os 3 depoimentos do design, sem nomes de pessoas", () => {
    expect(secaoDepoimentos.titulo).toBe("O que dizem as famílias");
    expect(depoimentos).toHaveLength(3);
    expect(depoimentos.map((d) => d.autor)).toEqual([
      "Paciente · placa de bruxismo e limpeza",
      "Paciente · via WhatsApp",
      "Filha de paciente · via Instagram",
    ]);
  });

  it("não vazam arroba nem perfil de terceiros", () => {
    for (const d of depoimentos) {
      expect(d.texto).not.toMatch(/@/);
      expect(d.autor).not.toMatch(/@/);
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
    for (const d of depoimentos) {
      expect(d.celular.texto.trim()).not.toBe("");
      expect(d.celular.texto).not.toMatch(/@/);
      expect(d.celular.autor).not.toMatch(/@/);
    }
  });
});
