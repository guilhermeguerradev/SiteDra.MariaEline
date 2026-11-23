"use client";

import { useEffect } from "react";

const alvos = ".revelar, .revelar-foto, .animar-rotulo, .desenhar-linha";

// Revela os blocos quando entram na tela, como no design: marca a página com
// .anim-js (que esconde os blocos) e cada bloco com .is-visivel (que o anima).
// Não faz nada com redução de movimento. Sem JavaScript, tudo fica visível.
export function RevelarAoRolar() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const raiz = document.documentElement;
    // A linha decorativa é cortada por clip-path enquanto escondida, e o
    // navegador não a vê como visível. Por isso observamos o elemento pai.
    const alvosDe = new Map<Element, Element[]>();
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          for (const alvo of alvosDe.get(entrada.target) ?? []) {
            alvo.classList.add("is-visivel");
          }
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    raiz.classList.add("anim-js");
    document.querySelectorAll(alvos).forEach((el) => {
      const observado = el.matches(".desenhar-linha")
        ? (el.parentElement ?? el)
        : el;
      const lista = alvosDe.get(observado) ?? [];
      lista.push(el);
      alvosDe.set(observado, lista);
      observador.observe(observado);
    });

    return () => {
      observador.disconnect();
      raiz.classList.remove("anim-js");
    };
  }, []);

  return null;
}
