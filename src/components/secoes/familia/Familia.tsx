import Image from "next/image";
import { familia } from "@/src/content/familia";
import { FamiliaCelular } from "@/src/components/secoes/familia/FamiliaCelular";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";
import { TituloDeSecao } from "@/src/components/ui/TituloDeSecao";

export function Familia() {
  return (
    <SecaoPagina
      id="familia"
      idTitulo="titulo-familia"
      className="bg-gelo"
      celular={<FamiliaCelular />}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
        <div className="revelar relative pb-[clamp(40px,6vw,70px)]">
          <div className="revelar-foto relative aspect-square overflow-hidden rounded-[40px] shadow-[0_30px_60px_rgb(35_63_69/0.14)]">
            <Image
              src={familia.fotoPrincipal.src}
              alt={familia.fotoPrincipal.alt}
              width={familia.fotoPrincipal.largura}
              height={familia.fotoPrincipal.altura}
              sizes="(min-width: 1180px) 560px, 100vw"
              className="size-full object-cover object-[50%_30%]"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-2/5 rounded-[30px] border border-white/90 bg-creme/70 p-2 shadow-[0_24px_48px_rgb(35_63_69/0.18)] backdrop-blur-[12px] min-[1280px]:-right-6">
            <div className="aspect-[3/4] overflow-hidden rounded-[22px]">
              <Image
                src={familia.fotoDestaque.src}
                alt={familia.fotoDestaque.alt}
                width={familia.fotoDestaque.largura}
                height={familia.fotoDestaque.altura}
                sizes="(min-width: 1180px) 224px, 40vw"
                className="size-full object-cover object-[50%_40%]"
              />
            </div>
          </div>
        </div>

        <div className="revelar flex flex-col gap-6">
          <RotuloDeSecao>{familia.rotulo}</RotuloDeSecao>
          <TituloDeSecao id="titulo-familia">{familia.titulo}</TituloDeSecao>
          <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-xl leading-normal text-petroleo">
            {familia.perguntas.map((pergunta) => (
              <li key={pergunta}>{pergunta}</li>
            ))}
          </ul>
          <p className="m-0 text-lg leading-[1.7] text-pretty">
            {familia.paragrafos[0]}
          </p>
          <p className="m-0 text-lg leading-[1.7] text-petroleo">
            {familia.paragrafos[1]}
          </p>
          <p className="m-0 text-xl leading-normal font-semibold text-petroleo">
            {familia.fecho}
          </p>
        </div>
      </div>
    </SecaoPagina>
  );
}
