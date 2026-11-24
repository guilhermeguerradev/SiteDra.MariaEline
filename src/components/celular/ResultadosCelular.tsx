import Image from "next/image";
import { resultados } from "@/src/domain/resultados";
import { CabecalhoCelular } from "./CabecalhoCelular";

const { clareamento, casos } = resultados;

const marcaAntes =
  "absolute left-1.5 rounded-full bg-petroleo/80 px-2 py-[3px] text-[10px] text-creme";
const marcaDepois =
  "absolute left-1.5 rounded-full bg-menta px-2 py-[3px] text-[10px] font-medium text-petroleo";

function Figura({
  legenda,
  children,
}: {
  legenda: string;
  children: React.ReactNode;
}) {
  return (
    <li className="revelar m-0 flex list-none flex-col gap-2">
      <figure className="m-0 flex flex-col gap-2">
        <div className="overflow-hidden rounded-[18px] bg-petroleo p-[3px]">
          {children}
        </div>
        <figcaption className="text-[13px] leading-[1.3] font-medium text-petroleo">
          {legenda}
        </figcaption>
      </figure>
    </li>
  );
}

// Duas fotos empilhadas (antes em cima, depois embaixo), como no design.
function ParEmpilhado() {
  return (
    <div className="flex flex-col gap-[3px]">
      {[
        {
          foto: clareamento.antes,
          marca: clareamento.rotuloAntes,
          depois: false,
        },
        {
          foto: clareamento.depois,
          marca: clareamento.rotuloDepois,
          depois: true,
        },
      ].map(({ foto, marca, depois }) => (
        <div
          key={foto.src}
          className={`relative aspect-[16/10] overflow-hidden ${
            depois
              ? "rounded-[4px_4px_15px_15px]"
              : "rounded-[15px_15px_4px_4px]"
          }`}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.largura}
            height={foto.altura}
            sizes="50vw"
            className="absolute inset-0 size-full object-cover"
          />
          <span className={`${depois ? marcaDepois : marcaAntes} top-1.5`}>
            {marca}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ResultadosCelular() {
  const [limpeza, restauracao, extracao] = casos;
  const ordem = [extracao, limpeza, restauracao];

  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-[72px] nav:hidden">
      <div className="mx-auto w-full max-w-[640px] flex flex-col gap-7">
        <CabecalhoCelular
          rotulo={resultados.rotulo}
          titulo={resultados.titulo}
          idTitulo="titulo-resultados-celular"
        />

        <ul className="m-0 grid list-none grid-cols-2 gap-x-2.5 gap-y-[18px] p-0">
          <Figura legenda={clareamento.rotulo}>
            <ParEmpilhado />
          </Figura>
          {ordem.map((caso) => (
            <Figura key={caso.imagem.src} legenda={caso.legenda}>
              <div className="relative overflow-hidden rounded-[15px]">
                <Image
                  src={caso.imagem.src}
                  alt={caso.imagem.alt}
                  width={caso.imagem.largura}
                  height={caso.imagem.altura}
                  sizes="50vw"
                  className="block h-auto w-full"
                />
                {caso.antesDepois && (
                  <>
                    <span className={`${marcaAntes} top-1.5`}>
                      {clareamento.rotuloAntes}
                    </span>
                    <span className={`${marcaDepois} top-[calc(50%+6px)]`}>
                      {clareamento.rotuloDepois}
                    </span>
                  </>
                )}
              </div>
            </Figura>
          ))}
        </ul>

        <p className="m-0 text-xs leading-normal text-petroleo/75">
          {clareamento.legenda}
        </p>
      </div>
    </div>
  );
}
