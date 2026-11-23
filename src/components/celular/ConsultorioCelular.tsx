import Image from "next/image";
import { consultorio } from "@/src/domain/consultorio";
import { CabecalhoCelular } from "./CabecalhoCelular";

const [mesa, atendimento, modelo, familiaEspelho] = consultorio.fotos;
const { exclusivo } = consultorio;

type FotoProps = {
  foto: (typeof consultorio.fotos)[number];
  sizes: string;
};

function Foto({ foto, sizes }: FotoProps) {
  return (
    <Image
      src={foto.src}
      alt={foto.alt}
      width={foto.largura}
      height={foto.altura}
      sizes={sizes}
      className="revelar block h-auto w-full rounded-[18px]"
    />
  );
}

export function ConsultorioCelular() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-[72px] nav:hidden">
      <div className="flex flex-col gap-7">
        <CabecalhoCelular
          rotulo={consultorio.rotulo}
          titulo={consultorio.titulo}
          idTitulo="titulo-consultorio-celular"
        />

        <div className="flex flex-col gap-2">
          <Foto foto={mesa} sizes="100vw" />
          <div className="grid grid-cols-2 items-start gap-2">
            <div className="flex flex-col gap-2">
              <Foto foto={modelo} sizes="50vw" />
            </div>
            <div className="flex flex-col gap-2">
              <Foto foto={atendimento} sizes="50vw" />
              <Foto foto={familiaEspelho} sizes="50vw" />
            </div>
          </div>
        </div>

        <div className="revelar grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3.5 rounded-[22px] bg-white p-2.5 shadow-[0_8px_24px_rgb(35_63_69/0.06)]">
          <Image
            src={exclusivo.foto.src}
            alt={exclusivo.foto.alt}
            width={exclusivo.foto.largura}
            height={exclusivo.foto.altura}
            sizes="112px"
            className="block h-auto w-full rounded-[14px]"
          />
          <div className="flex flex-col gap-2 pr-1.5">
            <span className="text-[11px] font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
              {exclusivo.rotulo}
            </span>
            <span className="text-[17px] leading-[1.3] font-medium text-pretty text-petroleo">
              {exclusivo.destaque}
            </span>
            <span className="text-xs text-petroleo/75">
              {exclusivo.titulos.split(" · ").at(-1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
