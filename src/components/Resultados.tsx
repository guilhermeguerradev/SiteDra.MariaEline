import Image from "next/image";
import { resultados } from "@/src/domain/resultados";
import { CartaoClareamento } from "./CartaoClareamento";
import { ResultadosCelular } from "./celular/ResultadosCelular";

const marcaAntes =
  "absolute rounded-full bg-petroleo/75 px-3 py-[5px] text-xs text-creme";
const marcaDepois =
  "absolute rounded-full bg-menta px-3 py-[5px] text-xs font-medium text-petroleo";

export function Resultados() {
  return (
    <section
      id="resultados"
      aria-labelledby="titulo-resultados"
      className="scroll-mt-6 nav:scroll-mt-20"
    >
      <ResultadosCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10">
          <div className="revelar flex max-w-[680px] flex-col gap-4">
            <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
              {resultados.rotulo}
            </span>
            <h2
              id="titulo-resultados"
              className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-pretty text-petroleo"
            >
              {resultados.titulo}
            </h2>
          </div>

          <CartaoClareamento />

          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5 p-0">
            {resultados.casos.map((caso) => (
              <li
                key={caso.imagem.src}
                className="revelar group flex flex-col gap-3"
              >
                <div className="relative h-[380px] overflow-hidden rounded-3xl bg-gelo">
                  <Image
                    src={caso.imagem.src}
                    alt={caso.imagem.alt}
                    width={caso.imagem.largura}
                    height={caso.imagem.altura}
                    sizes="(min-width: 1180px) 300px, (min-width: 600px) 50vw, 100vw"
                    className="size-full object-cover object-[40%_50%] transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                  />
                  {caso.antesDepois && (
                    <>
                      <span className={`${marcaAntes} top-3 left-3`}>
                        {resultados.clareamento.rotuloAntes}
                      </span>
                      <span
                        className={`${marcaDepois} top-[calc(50%+10px)] left-3`}
                      >
                        {resultados.clareamento.rotuloDepois}
                      </span>
                    </>
                  )}
                </div>
                <span className="text-base font-medium text-petroleo">
                  {caso.legenda}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
