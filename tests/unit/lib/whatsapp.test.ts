import { describe, expect, it } from "vitest";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";

describe("whatsapp", () => {
  it("monta o link com o número configurado", () => {
    expect(montarLinkWhatsapp(dadosDeContato.whatsapp)).toBe(
      `https://wa.me/${dadosDeContato.whatsapp}`,
    );
  });
});

describe("mensagem inicial do WhatsApp", () => {
  it("o link só leva mensagem quando ela é informada", () => {
    expect(montarLinkWhatsapp("5532988747651")).toBe(
      "https://wa.me/5532988747651",
    );
    expect(montarLinkWhatsapp("5532988747651", "Olá, tudo bem?")).toBe(
      "https://wa.me/5532988747651?text=Ol%C3%A1%2C%20tudo%20bem%3F",
    );
  });
});
