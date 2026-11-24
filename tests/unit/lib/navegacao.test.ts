import { describe, expect, it } from "vitest";
import { hrefDaSecao } from "@/src/lib/navegacao";

describe("hrefDaSecao", () => {
  it("monta o link interno da seção", () => {
    expect(hrefDaSecao("sobre")).toBe("#sobre");
  });
});
