import { describe, expect, it } from "vitest";
import {
  calcularTopoDaSecao,
  MARGEM_MINIMA,
  type MedidasDaSecao,
} from "@/src/lib/posicaoDaSecao";

const base: MedidasDaSecao = {
  topoDoConteudo: 2000,
  alturaDoConteudo: 500,
  alturaDaTela: 900,
  alturaDoCabecalho: 80,
  centroExato: true,
};

describe("calcularTopoDaSecao", () => {
  it("centraliza o conteúdo que cabe na área livre sob o cabeçalho", () => {
    // Área livre: 820. Sobram 320, ou seja, 160 acima e 160 abaixo.
    expect(calcularTopoDaSecao(base)).toBe(2000 - 80 - 160);
  });

  it("deixa o conteúdo que não cabe logo abaixo do cabeçalho, com a margem mínima", () => {
    const alto = { ...base, alturaDoConteudo: 1200 };
    expect(calcularTopoDaSecao(alto)).toBe(2000 - 80 - MARGEM_MINIMA);
  });

  it("sobe o conteúdo acima do centro quando a seção tem fundo liso", () => {
    const liso = { ...base, centroExato: false };
    // Viés: 4% de 820 = 32,8 px, abaixo do máximo de 40 px.
    expect(calcularTopoDaSecao(liso)).toBeCloseTo(
      calcularTopoDaSecao(base) + 32.8,
    );
  });

  it("limita o viés a 40 px em telas altas", () => {
    const alta = { ...base, alturaDaTela: 2000, centroExato: false };
    const centro = calcularTopoDaSecao({ ...alta, centroExato: true });
    expect(calcularTopoDaSecao(alta)).toBe(centro + 40);
  });

  it("nunca devolve posição negativa", () => {
    const noComeco = { ...base, topoDoConteudo: 100 };
    expect(calcularTopoDaSecao(noComeco)).toBe(0);
  });

  it("não deixa o viés empurrar o conteúdo para trás do cabeçalho", () => {
    const justo = { ...base, alturaDoConteudo: 800, centroExato: false };
    const topo = calcularTopoDaSecao(justo);
    const posicaoNaTela = justo.topoDoConteudo - topo;
    expect(posicaoNaTela).toBeGreaterThanOrEqual(
      justo.alturaDoCabecalho + MARGEM_MINIMA,
    );
  });
});
