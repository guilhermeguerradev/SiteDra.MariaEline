import { describe, expect, it } from "vitest";
import { contatos, contatosSchema } from "@/src/domain/contatos";
import { cabecalho, hero } from "@/src/domain/hero";
import {
  itensNavegacao,
  itensVisiveis,
  secaoExiste,
  secoesExistentes,
} from "@/src/domain/navegacao";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";

describe("contatos", () => {
  it("passam no schema", () => {
    expect(contatosSchema.safeParse(contatos).success).toBe(true);
  });

  it("recusam WhatsApp sem DDI/DDD", () => {
    const invalido = { ...contatos, whatsapp: "988747651" };
    expect(contatosSchema.safeParse(invalido).success).toBe(false);
  });

  it("recusam e-mail inválido", () => {
    const invalido = { ...contatos, email: "sem-arroba" };
    expect(contatosSchema.safeParse(invalido).success).toBe(false);
  });

  it("recusam campo vazio no endereço", () => {
    const invalido = {
      ...contatos,
      endereco: { ...contatos.endereco, cidade: "" },
    };
    expect(contatosSchema.safeParse(invalido).success).toBe(false);
  });
});

describe("whatsapp", () => {
  it("monta o link com o número configurado", () => {
    expect(montarLinkWhatsapp(contatos.whatsapp)).toBe(
      `https://wa.me/${contatos.whatsapp}`,
    );
  });
});

describe("navegação", () => {
  it("só exibe links de seções que existem", () => {
    const visiveis = itensVisiveis();
    for (const item of visiveis) {
      expect(secaoExiste(item.secao)).toBe(true);
    }
  });

  it("esconde as seções futuras enquanto não existirem", () => {
    expect(secoesExistentes).toEqual(["inicio", "tratamentos", "contato"]);
    expect(itensVisiveis().map((i) => i.secao)).toEqual([
      "tratamentos",
      "contato",
    ]);
    expect(secaoExiste("sobre")).toBe(false);
    expect(secaoExiste("depoimentos")).toBe(false);
  });

  it("mostra o link quando a seção passa a existir", () => {
    const visiveis = itensVisiveis(itensNavegacao, ["inicio", "sobre"]);
    expect(visiveis.map((i) => i.secao)).toEqual(["sobre"]);
  });
});

describe("textos do hero (PRD, seção 4.1)", () => {
  it("são idênticos ao PRD", () => {
    expect(hero.selo).toBe("Cirurgiã-Dentista · Saúde da Família");
    expect(hero.tituloLeve).toBe("Maria Eline");
    expect(hero.titulo).toBe("Muniz");
    expect(hero.frase).toBe(
      "Cuidado preventivo para o sorriso de toda a sua família, em todas as fases da vida.",
    );
    expect(hero.chips).toEqual([
      "Atendimento para toda a família",
      "Foco em prevenção",
    ]);
  });

  it("mantém o texto do cabeçalho do design", () => {
    expect(cabecalho.nome).toBe("Dra. Maria Eline Muniz");
    expect(cabecalho.descricao).toBe("Cirurgiã-Dentista | Saúde da Família");
  });
});
