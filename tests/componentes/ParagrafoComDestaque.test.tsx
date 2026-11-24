// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ParagrafoComDestaque } from "@/src/components/ui/ParagrafoComDestaque";
import { limparTelaAposCadaTeste } from "./auxiliares";

limparTelaAposCadaTeste();

describe("ParagrafoComDestaque", () => {
  it("põe só os trechos em destaque dentro de <strong>", () => {
    const { container } = render(
      <ParagrafoComDestaque
        className="x"
        trechos={[
          { texto: "Formada pela " },
          { texto: "UFJF", emDestaque: true },
          { texto: "." },
        ]}
      />,
    );
    expect(container.textContent).toBe("Formada pela UFJF.");
    const destaques = container.querySelectorAll("strong");
    expect(destaques).toHaveLength(1);
    expect(destaques[0].textContent).toBe("UFJF");
  });
});
