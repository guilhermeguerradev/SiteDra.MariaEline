"use client";

import { useEffect, useRef } from "react";

// Barra fina no topo que acompanha a rolagem da página.
export function ProgressoRolagem() {
  const barraDeProgresso = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atualizar = () => {
      const maximo = document.documentElement.scrollHeight - window.innerHeight;
      const razao = maximo > 0 ? window.scrollY / maximo : 0;
      if (barraDeProgresso.current)
        barraDeProgresso.current.style.transform = `scaleX(${razao})`;
    };
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      window.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  return (
    <div
      ref={barraDeProgresso}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] h-0.5 w-full origin-left scale-x-0 bg-menta"
    />
  );
}
