// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RevelarAoRolar } from "@/src/components/comportamento/RevelarAoRolar";
import {
  CLASSE_ANIMACAO_LIGADA,
  CLASSE_BLOCO_VISIVEL,
} from "@/src/lib/revelacao";
import { limparTelaAposCadaTeste } from "./auxiliares";

limparTelaAposCadaTeste();

let aoObservar: (alvo: Element) => void;

class ObservadorFalso {
  constructor(private aoMudar: IntersectionObserverCallback) {
    aoObservar = (alvo) =>
      this.aoMudar(
        [{ target: alvo, isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

function simularMovimentoReduzido(reduzido: boolean) {
  vi.stubGlobal("matchMedia", () => ({ matches: reduzido }));
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", ObservadorFalso);
  document.documentElement.className = "";
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("RevelarAoRolar", () => {
  it("liga a animação e marca o bloco quando ele entra na tela", () => {
    simularMovimentoReduzido(false);
    const { container } = render(
      <>
        <RevelarAoRolar />
        <div className="revelar" data-testid="bloco" />
      </>,
    );
    const bloco = container.querySelector(".revelar") as Element;
    expect(document.documentElement).toHaveClass(CLASSE_ANIMACAO_LIGADA);
    expect(bloco).not.toHaveClass(CLASSE_BLOCO_VISIVEL);
    aoObservar(bloco);
    expect(bloco).toHaveClass(CLASSE_BLOCO_VISIVEL);
  });

  it("não esconde nada com redução de movimento", () => {
    simularMovimentoReduzido(true);
    render(<RevelarAoRolar />);
    expect(document.documentElement).not.toHaveClass(CLASSE_ANIMACAO_LIGADA);
  });

  it("desliga a animação ao sair da página", () => {
    simularMovimentoReduzido(false);
    const { unmount } = render(<RevelarAoRolar />);
    unmount();
    expect(document.documentElement).not.toHaveClass(CLASSE_ANIMACAO_LIGADA);
  });
});
