import Image from "next/image";
import { contatos } from "@/src/domain/contatos";
import { hero } from "@/src/domain/hero";
import { secaoExiste } from "@/src/domain/navegacao";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";
import { ChipHero } from "./ChipHero";
import { ParallaxSelos } from "./ParallaxSelos";

const linkWhatsapp = montarLinkWhatsapp(contatos.whatsapp);
const icones = ["♡", "✓"] as const;
const cores = ["menta", "azul"] as const;

function atraso(ms: number): React.CSSProperties {
  return { "--atraso": `${ms}ms` } as React.CSSProperties;
}

// Título em letras soltas, que entram uma a uma. O texto completo fica só para
// leitores de tela; as letras são decorativas.
function Letras({
  texto,
  linha,
  inicio,
}: {
  texto: string;
  linha: number;
  inicio: number;
}) {
  return (
    <>
      <span className="sr-only">{texto}</span>
      <span aria-hidden="true">
        {[...texto].map((letra, i) => (
          <span
            key={i}
            style={atraso(700 + linha * 160 + (inicio + i) * 38)}
            className="animar-letra"
          >
            {letra === " " ? " " : letra}
          </span>
        ))}
      </span>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-petroleo nav:block nav:min-h-[860px]"
    >
      <div className="absolute top-0 right-0 h-[64svh] w-full overflow-hidden nav:h-full nav:w-[62%]">
        <div className="absolute inset-0 nav:animar-respirar">
          <Image
            src={hero.foto.src}
            alt={hero.foto.alt}
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
        className="fusao-foto absolute top-0 left-0 h-[64svh] w-full nav:h-full"
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

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 pb-9 nav:px-gutter nav:pt-[210px] nav:pb-[120px]">
        <div className="flex max-w-[560px] flex-col items-start gap-7">
          <span
            style={atraso(550)}
            className="animar-selo rounded-full border border-menta/45 px-[18px] py-2 text-sm tracking-[.04em] text-menta"
          >
            {hero.selo}
          </span>

          <h1 className="m-0 flex flex-col text-[clamp(46px,7.2vw,104px)] leading-[.95] font-semibold tracking-[-0.02em] text-creme">
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em]">
              <span
                style={atraso(650)}
                className="animar-linha block font-light text-creme/55"
              >
                <Letras texto={hero.tituloLeve} linha={0} inicio={0} />
              </span>
            </span>
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em]">
              <span style={atraso(810)} className="animar-linha block">
                <Letras
                  texto={hero.titulo}
                  linha={1}
                  inicio={[...hero.tituloLeve].length}
                />
              </span>
            </span>
          </h1>

          <p
            style={atraso(1050)}
            className="animar-entrada m-0 max-w-[470px] text-[clamp(18px,1.6vw,22px)] leading-normal text-pretty text-creme/85"
          >
            {hero.frase}
          </p>

          <div
            style={atraso(1180)}
            className="animar-entrada flex flex-wrap items-center gap-3.5"
          >
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={
                { "--preenche": "var(--color-creme)" } as React.CSSProperties
              }
              className="botao-preenche rounded-full bg-menta px-8 py-[18px] text-[17px] font-semibold text-petroleo"
            >
              {hero.botaoPrincipal}
            </a>
            <span className="text-[15px] text-creme/75">{hero.publico}</span>
          </div>
        </div>
      </div>

      <ParallaxSelos className="absolute right-[clamp(40px,8vw,120px)] bottom-[72px] z-[2] hidden flex-col items-end gap-3 nav:flex">
        {hero.chips.map((texto, i) => (
          <div
            key={texto}
            style={atraso(1350 + i * 160)}
            className="animar-chip"
          >
            <div
              style={
                {
                  "--duracao": `${6 + i * 1.5}s`,
                  "--atraso": `${i * 0.8}s`,
                } as React.CSSProperties
              }
              className="animar-flutuar"
            >
              <ChipHero texto={texto} icone={icones[i]} cor={cores[i]} />
            </div>
          </div>
        ))}
      </ParallaxSelos>

      {secaoExiste("sobre") && (
        <a
          href="#sobre"
          className="absolute bottom-7 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2.5 text-xs tracking-[.18em] text-creme/70 uppercase hover:text-menta nav:flex animar-aparecer"
        >
          Role para conhecer
          <span
            aria-hidden="true"
            className="relative block h-11 w-px overflow-hidden bg-menta/25"
          >
            <span className="animar-dica absolute top-0 left-0 block h-4 w-px bg-menta" />
          </span>
        </a>
      )}
    </section>
  );
}
