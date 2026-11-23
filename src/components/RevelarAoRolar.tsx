"use client";

import { useEffect } from "react";

const alvos = ".revelar, .revelar-foto, .animar-rotulo, .desenhar-linha";

// Plano B para navegadores sem animação por rolagem (`animation-timeline`),
// como o Firefox e versões antigas do Safari: marca cada bloco quando ele entra
// na tela e o CSS faz a transição. Onde a animação por rolagem existe, o CSS
// cuida de tudo e este componente não faz nada. Sem JavaScript, o conteúdo
// continua visível.
export function RevelarAoRolar() {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const raiz = document.documentElement;
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          entrada.target.classList.add("is-visivel");
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    raiz.classList.add("anim-js");
    document.querySelectorAll(alvos).forEach((el) => observador.observe(el));

    return () => {
      observador.disconnect();
      raiz.classList.remove("anim-js");
    };
  }, []);

  return null;
}
