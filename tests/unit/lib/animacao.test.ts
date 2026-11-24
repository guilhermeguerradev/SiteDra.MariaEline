import { describe, expect, it } from "vitest";
import { atrasoDeAnimacao } from "@/src/lib/animacao";

describe("atrasoDeAnimacao", () => {
  it("expõe o atraso na variável CSS --atraso, em milissegundos", () => {
    expect(atrasoDeAnimacao(650)).toEqual({ "--atraso": "650ms" });
  });

  it("aceita zero", () => {
    expect(atrasoDeAnimacao(0)).toEqual({ "--atraso": "0ms" });
  });
});
