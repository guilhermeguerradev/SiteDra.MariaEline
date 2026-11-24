"use client";

import { useEffect } from "react";
import { calcularTopoDaSecao, SECOES_SEM_VIES } from "@/src/lib/posicaoDaSecao";

// Em todos os tamanhos de tela (celular, tablet, notebook e desktop), ao
// clicar num link interno a página rola até a posição calculada por
// calcularTopoDaSecao. Assim a navegação se comporta igual em qualquer aparelho.
export function NavegacaoPorSecao() {
  useEffect(() => {
    const aoClicar = (evento: MouseEvent) => {
      if (evento.defaultPrevented || evento.button !== 0) return;
      if (evento.metaKey || evento.ctrlKey) return;
      if (evento.shiftKey || evento.altKey) return;

      const link = (
        evento.target as Element | null
      )?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const secao = id ? document.getElementById(id) : null;
      if (!link || !id || !secao) return;

      evento.preventDefault();
      const reduzirMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: id === "inicio" ? 0 : medirTopoDaSecao(id, secao),
        behavior: reduzirMovimento ? "auto" : "smooth",
      });
      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return null;
}

// Altura do cabeçalho depois que a página rola, definida em tokens.css.
function lerAlturaDoCabecalho(): number {
  const valor = getComputedStyle(document.documentElement).getPropertyValue(
    "--altura-cabecalho",
  );
  return parseFloat(valor);
}

// O conteúdo de verdade da seção: o primeiro bloco visível, dentro da caixa que
// tem o espaço interno, sem contar enfeites posicionados (linhas decorativas).
function encontrarConteudoDaSecao(secao: HTMLElement): HTMLElement {
  const ehVisivel = (elemento: Element): elemento is HTMLElement =>
    elemento instanceof HTMLElement && elemento.offsetParent !== null;
  const caixa =
    Array.from(secao.children).find(
      (filho): filho is HTMLElement =>
        ehVisivel(filho) && parseFloat(getComputedStyle(filho).paddingTop) > 0,
    ) ?? secao;
  return (
    Array.from(caixa.children).find(
      (filho): filho is HTMLElement =>
        ehVisivel(filho) && getComputedStyle(filho).position !== "absolute",
    ) ?? caixa
  );
}

// Lê as medidas da página (a única parte que depende do navegador) e entrega
// para a conta, que é uma função pura.
function medirTopoDaSecao(id: string, secao: HTMLElement): number {
  const conteudo = encontrarConteudoDaSecao(secao).getBoundingClientRect();
  return calcularTopoDaSecao({
    topoDoConteudo: conteudo.top + window.scrollY,
    alturaDoConteudo: conteudo.height,
    alturaDaTela: window.innerHeight,
    alturaDoCabecalho: lerAlturaDoCabecalho(),
    semVies: SECOES_SEM_VIES.has(id),
  });
}
