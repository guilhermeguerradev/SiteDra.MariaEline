"use client";

import { useEffect } from "react";
import {
  CLASSE_ANIMACAO_LIGADA,
  CLASSE_BLOCO_VISIVEL,
  CLASSES_DE_REVELACAO,
  SELETOR_DOS_REVELAVEIS,
} from "@/src/lib/revelacao";

// Revela os blocos quando entram na tela, como no design: marca a página com
// CLASSE_ANIMACAO_LIGADA (que esconde os blocos) e cada bloco com
// CLASSE_BLOCO_VISIVEL (que o anima). Não faz nada com redução de movimento.
// Sem JavaScript, tudo fica visível.
export function RevelarAoRolar() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const raiz = document.documentElement;
    // Quem o observador vigia pode não ser quem aparece: a linha decorativa é
    // cortada enquanto escondida, e o navegador não a vê como visível. Por isso
    // vigiamos o elemento pai e animamos a linha.
    const reveladosPorObservado = new Map<Element, Element[]>();
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          for (const revelado of reveladosPorObservado.get(entrada.target) ??
            []) {
            revelado.classList.add(CLASSE_BLOCO_VISIVEL);
          }
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    raiz.classList.add(CLASSE_ANIMACAO_LIGADA);
    document.querySelectorAll(SELETOR_DOS_REVELAVEIS).forEach((elemento) => {
      const observado = elemento.matches(`.${CLASSES_DE_REVELACAO.linha}`)
        ? (elemento.parentElement ?? elemento)
        : elemento;
      const lista = reveladosPorObservado.get(observado) ?? [];
      lista.push(elemento);
      reveladosPorObservado.set(observado, lista);
      observador.observe(observado);
    });

    return () => {
      observador.disconnect();
      raiz.classList.remove(CLASSE_ANIMACAO_LIGADA);
    };
  }, []);

  return null;
}
