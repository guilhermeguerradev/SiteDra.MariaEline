import { describe, expect, it } from "vitest";
import {
  dadosDeContato,
  dadosDeContatoSchema,
} from "@/src/content/dadosDeContato";

describe("dados de contato", () => {
  it("passam no schema", () => {
    expect(dadosDeContatoSchema.safeParse(dadosDeContato).success).toBe(true);
  });

  it("recusam WhatsApp sem DDI/DDD", () => {
    const invalido = { ...dadosDeContato, whatsapp: "988747651" };
    expect(dadosDeContatoSchema.safeParse(invalido).success).toBe(false);
  });

  it("recusam e-mail inválido", () => {
    const invalido = { ...dadosDeContato, email: "sem-arroba" };
    expect(dadosDeContatoSchema.safeParse(invalido).success).toBe(false);
  });

  it("recusam campo vazio no endereço", () => {
    const invalido = {
      ...dadosDeContato,
      endereco: { ...dadosDeContato.endereco, cidade: "" },
    };
    expect(dadosDeContatoSchema.safeParse(invalido).success).toBe(false);
  });
});
