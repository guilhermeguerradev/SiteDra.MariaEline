import { describe, expect, it } from "vitest";
import { atrasoDeAnimacao, variaveisCss } from "@/src/lib/animacao";

describe("atrasoDeAnimacao", () => {
  it("expõe o atraso na variável CSS --atraso, em milissegundos", () => {
    expect(atrasoDeAnimacao(650)).toEqual({ "--atraso": "650ms" });
  });

  it("aceita zero", () => {
    expect(atrasoDeAnimacao(0)).toEqual({ "--atraso": "0ms" });
  });
});

describe("variaveisCss", () => {
  it("devolve as variáveis como estilo", () => {
    expect(variaveisCss({ "--preenche": "red", "--duracao": "6s" })).toEqual({
      "--preenche": "red",
      "--duracao": "6s",
    });
  });
});
