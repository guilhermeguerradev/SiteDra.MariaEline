import { describe, expect, it } from "vitest";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import {
  montarDadosEstruturados,
  serializarDadosEstruturados,
} from "@/src/lib/seo";

describe("dados estruturados Dentist", () => {
  const dados = montarDadosEstruturados();

  it("declara o tipo Dentist do schema.org", () => {
    expect(dados["@context"]).toBe("https://schema.org");
    expect(dados["@type"]).toBe("Dentist");
  });

  it("usa os dadosDeContato oficiais", () => {
    expect(dados.telephone).toBe(`+${dadosDeContato.whatsapp}`);
    expect(dados.email).toBe(dadosDeContato.email);
    expect(dados.address.addressLocality).toBe("Juiz de Fora");
    expect(dados.address.addressRegion).toBe("MG");
  });

  it("gera JSON válido sem '<' solto", () => {
    const texto = serializarDadosEstruturados();
    expect(texto).not.toContain("<");
    expect(JSON.parse(texto)["@type"]).toBe("Dentist");
  });
});

describe("dados estruturados com URL do site", () => {
  it("não inclui url nem image sem a URL", () => {
    const dados = montarDadosEstruturados();
    expect("url" in dados).toBe(false);
    expect("image" in dados).toBe(false);
  });

  it("inclui url e image absolutas com a URL", () => {
    const dados = montarDadosEstruturados("https://dramariaeline.com.br");
    expect(dados).toMatchObject({
      url: "https://dramariaeline.com.br",
      image: "https://dramariaeline.com.br/images/inicio.jpg",
    });
  });
});
