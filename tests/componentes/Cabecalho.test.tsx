// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Cabecalho } from "@/src/components/layout/Cabecalho";
import { itensDoMenu } from "@/src/content/navegacao";
import { limparTelaAposCadaTeste } from "./auxiliares";

limparTelaAposCadaTeste();

describe("Cabecalho", () => {
  it("começa com o menu do celular fechado", () => {
    render(<Cabecalho />);
    const botao = screen.getByRole("button", { name: "Menu" });
    expect(botao).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("menu-mobile")).toBeNull();
  });

  it("abre o menu ao clicar e informa o estado", async () => {
    render(<Cabecalho />);
    const botao = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(botao);
    expect(botao).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("menu-mobile")).not.toBeNull();
  });

  it("fecha o menu com Escape", async () => {
    render(<Cabecalho />);
    const botao = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(botao);
    await userEvent.keyboard("{Escape}");
    expect(botao).toHaveAttribute("aria-expanded", "false");
  });

  it("fecha o menu ao escolher uma seção", async () => {
    render(<Cabecalho />);
    const botao = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(botao);
    const menu = document.getElementById("menu-mobile") as HTMLElement;
    const primeiroLink = menu.querySelector("a[href^='#']") as HTMLElement;
    await userEvent.click(primeiroLink);
    expect(botao).toHaveAttribute("aria-expanded", "false");
  });

  it("lista um link para cada seção do menu", () => {
    render(<Cabecalho />);
    const menuDoDesktop = screen.getAllByRole("navigation", {
      name: "Principal",
    })[0];
    const hrefs = Array.from(menuDoDesktop.querySelectorAll("a")).map((link) =>
      link.getAttribute("href"),
    );
    expect(hrefs).toEqual(itensDoMenu().map((item) => `#${item.secao}`));
  });
});
