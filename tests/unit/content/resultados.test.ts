import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { resultados } from "@/src/content/resultados";
import { caminhoPublico } from "../auxiliares";

describe("seção Resultados", () => {
  it("usa os textos do design", () => {
    expect(resultados.titulo).toBe("Sorrisos cuidados no consultório");
    expect(resultados.clareamento.legenda).toBe(
      "Resultado de apenas 1 semana de clareamento caseiro, com acompanhamento profissional e a colaboração do paciente.",
    );
    expect(resultados.casos.map((caso) => caso.legenda)).toEqual([
      "Limpeza · antes e depois",
      "Restaurações",
      "Extração de sisos",
    ]);
  });

  it("não inclui a imagem do tratamento de cárie em andamento (D25)", () => {
    const todas = JSON.stringify(resultados);
    expect(todas).not.toContain("carie");
    expect(todas).not.toContain("cárie");
  });

  it("todas as imagens têm texto alternativo e arquivo existente", () => {
    const { clareamento, casos } = resultados;
    const imagens = [
      clareamento.par,
      clareamento.antes,
      clareamento.depois,
      ...casos.map((caso) => caso.imagem),
    ];
    expect(imagens).toHaveLength(6);
    for (const imagem of imagens) {
      expect(imagem.alt.trim()).not.toBe("");
      expect(existsSync(caminhoPublico(imagem.src))).toBe(true);
    }
  });
});
