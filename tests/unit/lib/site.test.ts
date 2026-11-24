import { describe, expect, it } from "vitest";
import { montarUrl, obterUrlSite } from "@/src/lib/site";

describe("obterUrlSite", () => {
  it("devolve undefined sem a variável", () => {
    expect(obterUrlSite(undefined)).toBeUndefined();
    expect(obterUrlSite("")).toBeUndefined();
    expect(obterUrlSite("   ")).toBeUndefined();
  });

  it("aceita domínio próprio e subdomínio do host", () => {
    expect(obterUrlSite("https://dramariaeline.com.br")).toBe(
      "https://dramariaeline.com.br",
    );
    expect(obterUrlSite("https://dramariaeline.pages.dev")).toBe(
      "https://dramariaeline.pages.dev",
    );
  });

  it("remove barra final e caminho", () => {
    expect(obterUrlSite("https://dramariaeline.com.br/")).toBe(
      "https://dramariaeline.com.br",
    );
    expect(obterUrlSite("https://dramariaeline.com.br/pagina?x=1")).toBe(
      "https://dramariaeline.com.br",
    );
  });

  it("recusa valores inválidos ou de outro protocolo", () => {
    expect(obterUrlSite("dramariaeline.com.br")).toBeUndefined();
    expect(obterUrlSite("javascript:alert(1)")).toBeUndefined();
    expect(obterUrlSite("ftp://dramariaeline.com.br")).toBeUndefined();
  });
});

describe("montarUrl", () => {
  it("junta base e caminho sem barra duplicada", () => {
    expect(montarUrl("https://exemplo.com.br", "/images/inicio.jpg")).toBe(
      "https://exemplo.com.br/images/inicio.jpg",
    );
    expect(montarUrl("https://exemplo.com.br", "sitemap.xml")).toBe(
      "https://exemplo.com.br/sitemap.xml",
    );
  });
});
