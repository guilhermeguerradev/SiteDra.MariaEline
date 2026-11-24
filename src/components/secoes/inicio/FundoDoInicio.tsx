import Image from "next/image";
import { inicio } from "@/src/content/inicio";

// Tudo o que fica atrás do texto do início: a foto, o reflexo de luz, os
// degradês que a fundem ao fundo e a linha decorativa.
export function FundoDoInicio() {
  return (
    <>
      <div className="absolute top-0 right-0 h-[64svh] w-full overflow-hidden largo:h-full largo:w-[62%]">
        <div className="absolute inset-0 largo:animar-respirar">
          <Image
            src={inicio.foto.src}
            alt={inicio.foto.alt}
            fill
            priority
            sizes="(min-width: 1180px) 62vw, 100vw"
            className="animar-foto object-cover object-[42%_30%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="animar-reflexo absolute top-[-20%] bottom-[-20%] left-[-45%] block w-[38%] bg-[linear-gradient(90deg,transparent,rgb(255_250_235/0.2)_50%,transparent)] opacity-0" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="fusao-foto absolute top-0 left-0 h-[64svh] w-full largo:h-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-petroleo/70 to-petroleo/0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[220px] bg-linear-to-t from-petroleo/75 to-petroleo/0"
      />
      <svg
        viewBox="0 0 1440 860"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="desenhar-entrada pointer-events-none absolute inset-0 size-full"
      >
        <path
          d="M-20 720 C 240 640, 420 800, 660 700 S 980 520, 1180 600 S 1400 720, 1470 640"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity=".7"
          vectorEffect="non-scaling-stroke"
          className="text-menta"
        />
      </svg>
    </>
  );
}
