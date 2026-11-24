import Image from "next/image";
import { consultorio } from "@/src/content/consultorio";
import { CabecalhoDeSecaoCompacta } from "@/src/components/ui/CabecalhoDeSecaoCompacta";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";

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
      className="revelar block h-auto w-full rounded-moldura"
    />
  );
}

export function ConsultorioCompacta() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-secao-compacta largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto flex flex-col gap-7">
        <CabecalhoDeSecaoCompacta
          rotulo={consultorio.rotulo}
          titulo={consultorio.titulo}
          idTitulo="titulo-consultorio-compacta"
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

        <div className="revelar grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3.5 rounded-cartao-medio bg-white p-2.5 shadow-cartao-compacto">
          <Image
            src={exclusivo.foto.src}
            alt={exclusivo.foto.alt}
            width={exclusivo.foto.largura}
            height={exclusivo.foto.altura}
            sizes="112px"
            className="block h-auto w-full rounded-[14px]"
          />
          <div className="flex flex-col gap-2 pr-1.5">
            <RotuloDeSecao tamanho="minimo">{exclusivo.rotulo}</RotuloDeSecao>
            <span className="text-leitura leading-[1.3] font-medium text-pretty text-petroleo">
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
