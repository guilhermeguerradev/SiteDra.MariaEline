import { beneficios, secaoPrevenir } from "@/src/domain/prevenir";
import { CabecalhoCelular } from "./CabecalhoCelular";

export function PrevenirCelular() {
  return (
    <div className="relative px-5 py-14 nav:hidden">
      <div className="mx-auto w-full max-w-[640px] relative flex flex-col gap-6">
        <CabecalhoCelular
          rotulo={secaoPrevenir.rotulo}
          titulo={secaoPrevenir.titulo}
          idTitulo="titulo-prevenir-celular"
          escuro
        />
        <ol className="m-0 grid list-none grid-cols-2 gap-x-3.5 gap-y-5 p-0">
          {beneficios.map((beneficio) => (
            <li
              key={beneficio.numero}
              className="revelar flex flex-col gap-2 border-t border-menta/30 pt-4"
            >
              <span
                aria-hidden="true"
                className="text-[40px] leading-none font-extralight text-menta"
              >
                {beneficio.numero}
              </span>
              <h3 className="m-0 text-[17px] leading-tight font-medium text-creme">
                {beneficio.titulo}
              </h3>
              <p className="m-0 text-sm leading-normal text-creme/80">
                {beneficio.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
