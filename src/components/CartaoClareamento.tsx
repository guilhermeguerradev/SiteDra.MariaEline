import Image from "next/image";
import { resultados } from "@/src/domain/resultados";

const { clareamento } = resultados;

export function CartaoClareamento() {
  return (
    <div className="revelar grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-stretch gap-5">
      <div className="flex flex-col justify-between gap-6 rounded-[32px] bg-gelo p-[clamp(24px,3vw,40px)]">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
            {clareamento.rotulo}
          </span>
          <p className="m-0 text-[clamp(24px,2.4vw,32px)] leading-[1.15] font-medium text-pretty text-petroleo">
            {clareamento.destaque}
          </p>
        </div>
        <div className="relative aspect-[1600/427] overflow-hidden rounded-[22px] bg-white">
          <Image
            src={clareamento.par.src}
            alt={clareamento.par.alt}
            width={clareamento.par.largura}
            height={clareamento.par.altura}
            sizes="(min-width: 1180px) 520px, 100vw"
            className="size-full object-cover"
          />
          <span className="absolute top-2.5 left-2.5 rounded-full bg-petroleo/75 px-3 py-[5px] text-xs text-creme">
            {clareamento.rotuloAntes}
          </span>
          <span className="absolute top-2.5 left-[calc(50%+10px)] rounded-full bg-menta px-3 py-[5px] text-xs font-medium text-petroleo">
            {clareamento.rotuloDepois}
          </span>
        </div>
        <p className="m-0 text-base leading-relaxed text-pretty">
          {clareamento.legenda}
        </p>
      </div>

      <div className="grid content-start gap-3 rounded-[32px] bg-petroleo p-3">
        {[
          {
            foto: clareamento.antes,
            marca: clareamento.rotuloAntes,
            destaque: false,
          },
          {
            foto: clareamento.depois,
            marca: clareamento.rotuloDepoisSemana,
            destaque: true,
          },
        ].map(({ foto, marca, destaque }) => (
          <div
            key={foto.src}
            className="relative aspect-[760/355] overflow-hidden rounded-[22px]"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.largura}
              height={foto.altura}
              sizes="(min-width: 1180px) 560px, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
            <span
              className={`absolute bottom-3 left-3 rounded-full px-3.5 py-1.5 text-[13px] ${
                destaque
                  ? "bg-menta font-medium text-petroleo"
                  : "bg-petroleo/75 text-creme"
              }`}
            >
              {marca}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
