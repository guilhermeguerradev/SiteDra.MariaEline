import { describe, expect, it } from "vitest";
import { depoimentos } from "@/src/domain/depoimentos";
import {
  buscarTratamento,
  gruposTratamentos,
  mensagemTratamento,
  tratamentos,
} from "@/src/domain/tratamentos";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";

describe("versão do celular", () => {
  it("os 3 grupos de tratamentos cobrem os 8 serviços, sem repetir", () => {
    const ids = gruposTratamentos.flatMap((g) => g.ids);
    expect(ids).toHaveLength(8);
    expect(new Set(ids).size).toBe(8);
    expect([...ids].sort()).toEqual(tratamentos.map((t) => t.id).sort());
  });

  it("todo tratamento tem título e frase curtos para o celular", () => {
    for (const t of tratamentos) {
      expect(t.celular.titulo.trim()).not.toBe("");
      expect(t.celular.descricao.trim()).not.toBe("");
    }
  });

  it("a mensagem inicial do WhatsApp cita o tratamento", () => {
    expect(mensagemTratamento(buscarTratamento("prevencao"))).toBe(
      "Olá, Dra. Maria Eline! Gostaria de saber mais sobre check-up.",
    );
  });

  it("o link do WhatsApp só leva mensagem quando ela é informada", () => {
    expect(montarLinkWhatsapp("5532988747651")).toBe(
      "https://wa.me/5532988747651",
    );
    expect(montarLinkWhatsapp("5532988747651", "Olá, tudo bem?")).toBe(
      "https://wa.me/5532988747651?text=Ol%C3%A1%2C%20tudo%20bem%3F",
    );
  });

  it("os depoimentos do celular não têm arroba nem nome de terceiros", () => {
    expect(depoimentos).toHaveLength(3);
    for (const d of depoimentos) {
      expect(d.celular.texto.trim()).not.toBe("");
      expect(d.celular.texto).not.toMatch(/@/);
      expect(d.celular.autor).not.toMatch(/@/);
    }
  });
});
