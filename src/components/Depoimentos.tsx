import { depoimentos, secaoDepoimentos } from "@/src/domain/depoimentos";
import { DepoimentosCelular } from "./celular/DepoimentosCelular";

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="scroll-mt-10 nav:scroll-mt-24 bg-gelo"
    >
      <DepoimentosCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
          <div className="revelar flex max-w-[680px] flex-col gap-4">
            <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
              {secaoDepoimentos.rotulo}
            </span>
            <h2
              id="titulo-depoimentos"
              className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-petroleo"
            >
              {secaoDepoimentos.titulo}
            </h2>
          </div>

          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-5 p-0">
            {depoimentos.map((depoimento) => (
              <li
                key={depoimento.autor + depoimento.texto.slice(0, 20)}
                className="revelar flex flex-col gap-3.5 rounded-3xl bg-creme px-7 py-[26px]"
              >
                <figure className="m-0 flex flex-col gap-3.5">
                  <span
                    aria-hidden="true"
                    className="text-lg tracking-[4px] text-azul-escuro"
                  >
                    ★★★★★
                  </span>
                  <blockquote className="m-0">
                    <p className="m-0 text-base leading-relaxed text-pretty">
                      “{depoimento.texto}”
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-petroleo/10 pt-3 text-[15px] text-petroleo">
                    <span
                      aria-hidden="true"
                      className="flex size-10 flex-none items-center justify-center rounded-full bg-menta text-base text-petroleo"
                    >
                      ♡
                    </span>
                    {depoimento.autor}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
