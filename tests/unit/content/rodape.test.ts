import { describe, expect, it } from "vitest";
import { direitosReservados, rodape } from "@/src/content/rodape";

describe("textos do rodapé", () => {
  it("têm o CRO e o aviso definidos pela dona do projeto", () => {
    expect(rodape.cro).toBe("CRO-MG 64493");
    expect(rodape.aviso).toBe("Atendimento particular, sem convênios");
    expect(rodape.responsavel).toBe(
      "Responsável técnica: Dra. Maria Eline Muniz · CRO-MG 64493",
    );
  });

  it("direitos reservados usam o ano informado", () => {
    expect(direitosReservados(2026)).toBe(
      "© 2026 Dra. Maria Eline Muniz. Todos os direitos reservados.",
    );
  });
});
