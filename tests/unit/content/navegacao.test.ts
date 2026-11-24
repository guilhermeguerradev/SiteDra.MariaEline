import { describe, expect, it } from "vitest";
import {
  itensNavegacao,
  itensDoMenu,
  secaoExiste,
  secoesExistentes,
  secoesNoCentroExato,
} from "@/src/content/navegacao";

describe("navegação", () => {
  it("só exibe links de seções que existem", () => {
    const visiveis = itensDoMenu();
    for (const item of visiveis) {
      expect(secaoExiste(item.secao)).toBe(true);
    }
  });

  it("lista todas as seções do design e todos os links do menu", () => {
    expect(secoesExistentes).toEqual([
      "inicio",
      "sobre",
      "familia",
      "tratamentos",
      "prevenir",
      "consultorio",
      "resultados",
      "depoimentos",
      "duvidas",
      "contato",
    ]);
    expect(itensDoMenu().map((item) => item.secao)).toEqual([
      "tratamentos",
      "sobre",
      "familia",
      "depoimentos",
      "duvidas",
      "contato",
    ]);
    expect(secaoExiste("secao-inexistente")).toBe(false);
  });

  it("mostra o link quando a seção passa a existir", () => {
    const visiveis = itensDoMenu(itensNavegacao, ["inicio", "sobre"]);
    expect(visiveis.map((item) => item.secao)).toEqual(["sobre"]);
  });
});

describe("secoesNoCentroExato", () => {
  it("são as seções com fundo próprio e existem na página", () => {
    expect([...secoesNoCentroExato].sort()).toEqual(["contato", "depoimentos"]);
    for (const secao of secoesNoCentroExato)
      expect(secaoExiste(secao)).toBe(true);
  });
});
