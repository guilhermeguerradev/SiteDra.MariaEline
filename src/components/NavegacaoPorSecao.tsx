"use client";

import { useEffect } from "react";

// Altura do cabeçalho fixo depois que a página rola: celular/tablet (py-3 +
// botão de 46 px) e desktop (py-4 + botão de 46 px + borda). O desktop começa
// em 1180 px, o mesmo ponto de quebra do Tailwind ("nav:").
const ALTURA_CABECALHO = { celular: 70, desktop: 81 } as const;
const LARGURA_DESKTOP = 1180;
// Espaço mínimo entre o cabeçalho e o começo do conteúdo.
const MARGEM_MINIMA = 24;
// Seções com fundo próprio (cartão escuro, faixa colorida) ficam no centro
// exato; as de fundo liso sobem um pouco.
const SEM_VIES = new Set(["depoimentos", "contato"]);

// Em todos os tamanhos de tela (celular, tablet, notebook e desktop), ao
// clicar num link interno a página rola até a posição calculada em
// topoDaSecao. Assim a navegação se comporta igual em qualquer aparelho.
export function NavegacaoPorSecao() {
  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const id = link?.getAttribute("href")?.slice(1);
      const secao = id ? document.getElementById(id) : null;
      if (!link || !id || !secao) return;

      e.preventDefault();
      const reduzir = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: id === "inicio" ? 0 : topoDaSecao(id, secao),
        behavior: reduzir ? "auto" : "smooth",
      });
      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return null;
}

// O conteúdo de verdade da seção: o primeiro bloco visível, dentro da caixa que
// tem o espaço interno, sem contar enfeites posicionados (linhas decorativas).
function conteudoDaSecao(secao: HTMLElement): HTMLElement {
  const caixa =
    Array.from(secao.children).find(
      (c): c is HTMLElement =>
        c instanceof HTMLElement &&
        c.offsetParent !== null &&
        parseFloat(getComputedStyle(c).paddingTop) > 0,
    ) ?? secao;
  return (
    Array.from(caixa.children).find(
      (c): c is HTMLElement =>
        c instanceof HTMLElement &&
        c.offsetParent !== null &&
        getComputedStyle(c).position !== "absolute",
    ) ?? caixa
  );
}

// Posição de rolagem em que o CONTEÚDO da seção (sem o espaço interno) fica
// centralizado na área livre sob o cabeçalho. Nas seções de fundo liso o
// conteúdo sobe um pouco acima do centro, que é onde o olho espera ver o
// começo. Se o conteúdo não cabe, ele para logo abaixo do cabeçalho.
function topoDaSecao(id: string, secao: HTMLElement): number {
  const cabecalho =
    window.innerWidth >= LARGURA_DESKTOP
      ? ALTURA_CABECALHO.desktop
      : ALTURA_CABECALHO.celular;
  const conteudo = conteudoDaSecao(secao);
  const area = conteudo.getBoundingClientRect();
  const livre = window.innerHeight - cabecalho;
  const vies = SEM_VIES.has(id) ? 0 : Math.min(40, livre * 0.04);
  const folga = Math.max(MARGEM_MINIMA, (livre - area.height) / 2 - vies);
  return Math.max(0, area.top + window.scrollY - cabecalho - folga);
}
