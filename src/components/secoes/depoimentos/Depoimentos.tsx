import { depoimentos, secaoDepoimentos } from "@/src/content/depoimentos";
import { DepoimentosCompacta } from "@/src/components/secoes/depoimentos/DepoimentosCompacta";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { CabecalhoDeSecao } from "@/src/components/ui/CabecalhoDeSecao";

export function Depoimentos() {
  return (
    <SecaoPagina
      id="depoimentos"
      idTitulo="titulo-depoimentos"
      className="bg-gelo"
      compacta={<DepoimentosCompacta />}
    >
      <div className="mx-auto flex max-w-conteudo flex-col gap-14">
        <CabecalhoDeSecao
          rotulo={secaoDepoimentos.rotulo}
          titulo={secaoDepoimentos.titulo}
          idTitulo="titulo-depoimentos"
        />

        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-5 p-0">
          {depoimentos.map((depoimento) => (
            <li
              key={depoimento.id}
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
                <figcaption className="flex items-center gap-3 border-t border-petroleo/10 pt-3 text-corpo text-petroleo">
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
    </SecaoPagina>
  );
}
