import { describe, expect, it } from "vitest";
import {
  itensNavegacao,
  itensVisiveis,
  secaoExiste,
  secoesExistentes,
} from "@/src/content/navegacao";

describe("navegação", () => {
  it("só exibe links de seções que existem", () => {
    const visiveis = itensVisiveis();
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
    expect(itensVisiveis().map((i) => i.secao)).toEqual([
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
    const visiveis = itensVisiveis(itensNavegacao, ["inicio", "sobre"]);
    expect(visiveis.map((i) => i.secao)).toEqual(["sobre"]);
  });
});
