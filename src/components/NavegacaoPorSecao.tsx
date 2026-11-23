"use client";

import { useEffect } from "react";

// Altura do cabeçalho fixo depois que a página rola (py-4 + botão de 46 px + borda).
const ALTURA_CABECALHO = 81;
const LARGURA_DESKTOP = 1180;

// No desktop, ao clicar num link interno a seção para sob o cabeçalho; se ela
// for mais baixa que a tela, fica centralizada na área livre. No celular quem
// cuida é a margem de rolagem de cada seção (scroll-mt no CSS).
export function NavegacaoPorSecao() {
  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (window.innerWidth < LARGURA_DESKTOP) return;

      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const id = link?.getAttribute("href")?.slice(1);
      const secao = id ? document.getElementById(id) : null;
      if (!link || !id || !secao) return;

      e.preventDefault();
      const livre = window.innerHeight - ALTURA_CABECALHO;
      const folga = Math.max(0, (livre - secao.offsetHeight) / 2);
      const topo =
        id === "inicio"
          ? 0
          : secao.getBoundingClientRect().top +
            window.scrollY -
            ALTURA_CABECALHO -
            folga;
      const reduzir = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: Math.max(0, topo),
        behavior: reduzir ? "auto" : "smooth",
      });
      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return null;
}
