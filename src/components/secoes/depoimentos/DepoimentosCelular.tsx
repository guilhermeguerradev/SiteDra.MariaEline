import { depoimentos, secaoDepoimentos } from "@/src/content/depoimentos";
import { CabecalhoDeSecaoCelular } from "@/src/components/ui/CabecalhoDeSecaoCelular";

export function DepoimentosCelular() {
  return (
    <div className="px-5 py-14 nav:hidden">
      <div className="mx-auto w-full max-w-[640px] flex flex-col gap-6">
        <CabecalhoDeSecaoCelular
          rotulo={secaoDepoimentos.rotulo}
          titulo={secaoDepoimentos.titulo}
          idTitulo="titulo-depoimentos-celular"
        />
        <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0">
          {depoimentos.map((depoimento, indice) => (
            <li
              key={depoimento.celular.autor}
              className={`revelar flex ${indice === 0 ? "col-span-2" : ""}`}
            >
              <figure className="m-0 flex w-full flex-col gap-2.5 rounded-[20px] bg-creme p-4">
                <span
                  aria-hidden="true"
                  className="text-[13px] tracking-[3px] text-azul-escuro"
                >
                  ★★★★★
                </span>
                <blockquote className="m-0 flex-1">
                  <p className="m-0 text-sm leading-normal text-pretty">
                    “{depoimento.celular.texto}”
                  </p>
                </blockquote>
                <figcaption className="text-xs text-petroleo/75">
                  {depoimento.celular.autor}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
