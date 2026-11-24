import { describe, expect, it } from "vitest";
import {
  secaoContato,
  linhasEndereco,
  urlMapaIncorporado,
} from "@/src/content/secaoContato";
import { itensDoMenu, secaoExiste } from "@/src/content/navegacao";

describe("seção Contato", () => {
  it("usa os textos confirmados do design", () => {
    expect(secaoContato.titulo).toBe("Vamos cuidar do sorriso da sua família?");
    expect(secaoContato.texto).toBe(
      "Atendo com hora marcada e horários flexíveis. Fale direto comigo pelo WhatsApp e combinamos o melhor momento para você.",
    );
    expect(secaoContato.botao).toBe("Agendar pelo WhatsApp");
    expect(secaoContato.atendimento).toBe(
      "Com hora marcada, em horários flexíveis combinados com você",
    );
  });

  it("monta o endereço em três linhas, como no design", () => {
    expect(linhasEndereco()).toEqual([
      "Av. Barão do Rio Branco, 2872 · Sala 1007",
      "Prédio Empório Bahamas",
      "Centro, Juiz de Fora – MG",
    ]);
  });

  it("incorpora só um mapa do Google por https", () => {
    const url = new URL(urlMapaIncorporado);
    expect(url.protocol).toBe("https:");
    expect(url.hostname).toBe("www.google.com");
    expect(url.pathname.startsWith("/maps/embed")).toBe(true);
  });

  it("aparece na navegação", () => {
    expect(secaoExiste("contato")).toBe(true);
    expect(itensDoMenu().map((item) => item.secao)).toContain("contato");
  });
});
