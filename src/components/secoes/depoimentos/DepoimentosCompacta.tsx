import { depoimentos, secaoDepoimentos } from "@/src/content/depoimentos";
import { CabecalhoDeSecaoCompacta } from "@/src/components/ui/CabecalhoDeSecaoCompacta";

export function DepoimentosCompacta() {
  return (
    <div className="px-5 py-14 largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto flex flex-col gap-6">
        <CabecalhoDeSecaoCompacta
          rotulo={secaoDepoimentos.rotulo}
          titulo={secaoDepoimentos.titulo}
          idTitulo="titulo-depoimentos-compacta"
        />
        <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0">
          {depoimentos.map((depoimento, indice) => (
            <li
              key={depoimento.id}
              className={`revelar flex ${indice === 0 ? "col-span-2" : ""}`}
            >
              <figure className="m-0 flex w-full flex-col gap-2.5 rounded-cartao-compacto bg-creme p-4">
                <span
                  aria-hidden="true"
                  className="text-miudo tracking-[3px] text-azul-escuro"
                >
                  ★★★★★
                </span>
                <blockquote className="m-0 flex-1">
                  <p className="m-0 text-sm leading-normal text-pretty">
                    “{depoimento.versaoCurta.texto}”
                  </p>
                </blockquote>
                <figcaption className="text-xs text-petroleo/75">
                  {depoimento.versaoCurta.autor}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
