import { describe, expect, it } from "vitest";
import { contatos } from "@/src/domain/contatos";
import {
  montarDadosEstruturados,
  serializarDadosEstruturados,
} from "@/src/domain/seo";

describe("dados estruturados Dentist", () => {
  const dados = montarDadosEstruturados();

  it("declara o tipo Dentist do schema.org", () => {
    expect(dados["@context"]).toBe("https://schema.org");
    expect(dados["@type"]).toBe("Dentist");
  });

  it("usa os contatos oficiais", () => {
    expect(dados.telephone).toBe(`+${contatos.whatsapp}`);
    expect(dados.email).toBe(contatos.email);
    expect(dados.address.addressLocality).toBe("Juiz de Fora");
    expect(dados.address.addressRegion).toBe("MG");
  });

  it("gera JSON válido sem '<' solto", () => {
    const texto = serializarDadosEstruturados();
    expect(texto).not.toContain("<");
    expect(JSON.parse(texto)["@type"]).toBe("Dentist");
  });
});
