// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { limparTelaAposCadaTeste } from "./auxiliares";

limparTelaAposCadaTeste();

describe("LinkExterno", () => {
  it("abre em outra aba sem expor a janela de origem", () => {
    render(<LinkExterno href="https://exemplo.com">Ir</LinkExterno>);
    const link = screen.getByRole("link", { name: "Ir" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("expõe a cor de preenchimento como variável CSS", () => {
    render(
      <LinkExterno href="https://exemplo.com" preenche="var(--color-menta)">
        Ir
      </LinkExterno>,
    );
    expect(screen.getByRole("link").style.getPropertyValue("--preenche")).toBe(
      "var(--color-menta)",
    );
  });

  it("não define estilo quando não há cor", () => {
    render(<LinkExterno href="https://exemplo.com">Ir</LinkExterno>);
    expect(screen.getByRole("link")).not.toHaveAttribute("style");
  });
});
