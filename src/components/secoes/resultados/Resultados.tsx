import Image from "next/image";
import { resultados } from "@/src/content/resultados";
import { CartaoClareamento } from "@/src/components/secoes/resultados/CartaoClareamento";
import { ResultadosCompacta } from "@/src/components/secoes/resultados/ResultadosCompacta";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { CabecalhoDeSecao } from "@/src/components/ui/CabecalhoDeSecao";

const marcaAntes =
  "absolute rounded-full bg-petroleo/75 px-3 py-[5px] text-xs text-creme";
const marcaDepois =
  "absolute rounded-full bg-menta px-3 py-[5px] text-xs font-medium text-petroleo";

export function Resultados() {
  return (
    <SecaoPagina
      id="resultados"
      idTitulo="titulo-resultados"
      compacta={<ResultadosCompacta />}
    >
      <div className="mx-auto flex max-w-conteudo flex-col gap-10">
        <CabecalhoDeSecao
          rotulo={resultados.rotulo}
          titulo={resultados.titulo}
          idTitulo="titulo-resultados"
        />

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
    </SecaoPagina>
  );
}
