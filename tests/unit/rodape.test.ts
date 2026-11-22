import { describe, expect, it } from "vitest";
import { contatos } from "@/src/domain/contatos";
import {
  formatarEndereco,
  formatarTelefone,
  montarLinkMapa,
} from "@/src/domain/formatacao";
import { direitosReservados, rodape } from "@/src/domain/rodape";

describe("formatarTelefone", () => {
  it("formata celular com DDI", () => {
    expect(formatarTelefone("5532988747651")).toBe("(32) 98874-7651");
  });

  it("formata fixo com DDI", () => {
    expect(formatarTelefone("553232151234")).toBe("(32) 3215-1234");
  });

  it("formata número sem DDI", () => {
    expect(formatarTelefone("32988747651")).toBe("(32) 98874-7651");
  });
});

describe("endereço", () => {
  it("usa o texto do design, com a sala", () => {
    expect(formatarEndereco(contatos.endereco)).toBe(
      "Av. Barão do Rio Branco, 2872 · Sl 1007, Juiz de Fora – MG",
    );
  });

  it("funciona sem complemento", () => {
    const { complemento, ...semSala } = contatos.endereco;
    expect(complemento).toBeDefined();
    expect(formatarEndereco(semSala)).toBe(
      "Av. Barão do Rio Branco, 2872, Juiz de Fora – MG",
    );
  });

  it("monta o link do mapa com o endereço codificado", () => {
    const url = new URL(montarLinkMapa(contatos.endereco));
    expect(url.origin + url.pathname).toBe(
      "https://www.google.com/maps/search/",
    );
    expect(url.searchParams.get("query")).toBe(
      "Av. Barão do Rio Branco, 2872 - Centro, Juiz de Fora - MG",
    );
  });
});

describe("textos do rodapé", () => {
  it("têm o CRO e o aviso definidos pela dona do projeto", () => {
    expect(rodape.cro).toBe("CRO-MG 64493");
    expect(rodape.aviso).toBe("Atendimento particular, sem convênios");
    expect(rodape.responsavel).toBe(
      "Responsável técnica: Dra. Maria Eline Muniz · CRO-MG 64493",
    );
  });

  it("direitos reservados usam o ano informado", () => {
    expect(direitosReservados(2026)).toBe(
      "© 2026 Dra. Maria Eline Muniz. Todos os direitos reservados.",
    );
  });
});
