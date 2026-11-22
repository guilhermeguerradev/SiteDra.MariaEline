import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { depoimentos, secaoDepoimentos } from "@/src/domain/depoimentos";
import { secaoExiste } from "@/src/domain/navegacao";
import { resultados } from "@/src/domain/resultados";

function arquivoPublico(src: string): string {
  return `public${src}`;
}

describe("seção Resultados", () => {
  it("usa os textos do design", () => {
    expect(resultados.titulo).toBe("Sorrisos cuidados no consultório");
    expect(resultados.clareamento.legenda).toBe(
      "Resultado de apenas 1 semana de clareamento caseiro, com acompanhamento profissional e a colaboração do paciente.",
    );
    expect(resultados.casos.map((c) => c.legenda)).toEqual([
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
      ...casos.map((c) => c.imagem),
    ];
    expect(imagens).toHaveLength(6);
    for (const imagem of imagens) {
      expect(imagem.alt.trim()).not.toBe("");
      expect(existsSync(arquivoPublico(imagem.src))).toBe(true);
    }
  });
});

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
