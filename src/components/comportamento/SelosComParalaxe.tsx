"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

// Quanto os selos andam, em pixels, quando o mouse vai de um canto ao outro.
const DESLOCAMENTO_HORIZONTAL = 14;
const DESLOCAMENTO_VERTICAL = 10;

// Leve paralaxe dos selos do início com o mouse (só com ponteiro de precisão e
// sem redução de movimento), como no design.
export function SelosComParalaxe({ className, children }: Props) {
  const contornoDosSelos = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const secaoInicio = document.getElementById("inicio");
    const selos = contornoDosSelos.current;
    if (!secaoInicio || !selos) return;
    const corresponde = (consulta: string) =>
      window.matchMedia(consulta).matches;
    if (!corresponde("(pointer: fine)")) return;
    if (corresponde("(prefers-reduced-motion: reduce)")) return;

    const aoMoverMouse = (evento: MouseEvent) => {
      const area = secaoInicio.getBoundingClientRect();
      if (area.bottom < 0) return;
      // Posição do mouse na área do início, de -0,5 (esquerda/topo) a 0,5.
      const horizontal = evento.clientX / area.width - 0.5;
      const vertical = (evento.clientY - area.top) / area.height - 0.5;
      selos.style.transform = `translate(${horizontal * -DESLOCAMENTO_HORIZONTAL}px, ${vertical * -DESLOCAMENTO_VERTICAL}px)`;
    };
    selos.style.transition = "transform 1.2s cubic-bezier(.2,.7,.2,1)";
    secaoInicio.addEventListener("mousemove", aoMoverMouse);
    return () => secaoInicio.removeEventListener("mousemove", aoMoverMouse);
  }, []);

  return (
    <div ref={contornoDosSelos} className={className}>
      {children}
    </div>
  );
}
