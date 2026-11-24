"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

// Leve paralaxe dos selos do hero com o mouse (só com ponteiro de precisão e
// sem redução de movimento), como no design.
export function ParallaxSelos({ className, children }: Props) {
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const elemento = caixa.current;
    if (!hero || !elemento) return;
    const consulta = (q: string) => window.matchMedia(q).matches;
    if (!consulta("(pointer: fine)")) return;
    if (consulta("(prefers-reduced-motion: reduce)")) return;

    const aoMover = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      if (r.bottom < 0) return;
      const x = e.clientX / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      elemento.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
    };
    elemento.style.transition = "transform 1.2s cubic-bezier(.2,.7,.2,1)";
    hero.addEventListener("mousemove", aoMover);
    return () => hero.removeEventListener("mousemove", aoMover);
  }, []);

  return (
    <div ref={caixa} className={className}>
      {children}
    </div>
  );
}
