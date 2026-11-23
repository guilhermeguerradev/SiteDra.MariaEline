import { beneficios, secaoPrevenir } from "@/src/domain/prevenir";
import { PrevenirCelular } from "./celular/PrevenirCelular";

export function Prevenir() {
  return (
    <section
      id="prevenir"
      aria-labelledby="titulo-prevenir"
      className="relative scroll-mt-10 nav:scroll-mt-20 overflow-clip bg-petroleo"
    >
      <PrevenirCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          className="desenhar-linha pointer-events-none absolute inset-0 size-full opacity-[.14]"
        >
          <path
            d="M-40 460 C 260 320, 420 580, 720 400 S 1180 180, 1500 320"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            className="text-menta"
          />
          <path
            d="M-40 520 C 300 380, 460 640, 760 460 S 1200 240, 1500 380"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="text-menta"
          />
        </svg>

        <div className="relative mx-auto flex max-w-[1240px] flex-col gap-16">
          <div className="revelar flex max-w-[680px] flex-col gap-4">
            <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-menta uppercase">
              {secaoPrevenir.rotulo}
            </span>
            <h2
              id="titulo-prevenir"
              className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-pretty text-creme"
            >
              {secaoPrevenir.titulo}
            </h2>
          </div>

          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(28px,3vw,48px)] p-0">
            {beneficios.map((beneficio) => (
              <li
                key={beneficio.numero}
                className="revelar flex flex-col gap-3.5 border-t border-menta/30 pt-7"
              >
                <span
                  aria-hidden="true"
                  className="text-7xl leading-none font-extralight text-menta"
                >
                  {beneficio.numero}
                </span>
                <h3 className="m-0 text-2xl font-medium text-creme">
                  {beneficio.titulo}
                </h3>
                <p className="m-0 text-[17px] leading-relaxed text-creme/80">
                  {beneficio.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
