import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { familia } from "@/src/content/familia";
import { caminhoPublico } from "../auxiliares";

describe("seção Família", () => {
  it("usa os textos do design", () => {
    expect(familia.titulo).toBe(
      "Uma experiência mais tranquila para toda a sua família",
    );
    expect(familia.perguntas).toEqual([
      "Seu filho tem medo de dentista?",
      "Você adia a consulta por ansiedade?",
      "Seus pais precisam de um cuidado mais paciente?",
    ]);
    expect(familia.fecho).toBe(
      "Sua família merece se sentir em casa no consultório.",
    );
  });

  it("tem as duas fotos, com texto alternativo e arquivo existente", () => {
    for (const foto of [familia.fotoPrincipal, familia.fotoDestaque]) {
      expect(foto.alt.trim()).not.toBe("");
      expect(existsSync(caminhoPublico(foto.src))).toBe(true);
    }
  });
});
