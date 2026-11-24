import Image from "next/image";
import { consultorio } from "@/src/content/consultorio";
import { ConsultorioCompacta } from "@/src/components/secoes/consultorio/ConsultorioCompacta";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { CabecalhoDeSecao } from "@/src/components/ui/CabecalhoDeSecao";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";

export function Consultorio() {
  const { exclusivo } = consultorio;
  return (
    <SecaoPagina
      id="consultorio"
      idTitulo="titulo-consultorio"
      className="bg-gelo"
      compacta={<ConsultorioCompacta />}
    >
      <div className="mx-auto flex max-w-conteudo flex-col gap-14">
        <CabecalhoDeSecao
          rotulo={consultorio.rotulo}
          titulo={consultorio.titulo}
          idTitulo="titulo-consultorio"
        />

        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 p-0">
          {consultorio.fotos.map((foto) => (
            <li
              key={foto.src}
              className="revelar-foto group h-[340px] overflow-hidden rounded-cartao"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={foto.largura}
                height={foto.altura}
                sizes="(min-width: 1180px) 300px, (min-width: 600px) 50vw, 100vw"
                style={{ objectPosition: foto.posicao }}
                className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <div className="revelar grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(24px,4vw,56px)] rounded-cartao-grande bg-white p-3.5 shadow-cartao">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={exclusivo.foto.src}
              alt={exclusivo.foto.alt}
              width={exclusivo.foto.largura}
              height={exclusivo.foto.altura}
              sizes="(min-width: 1180px) 560px, 100vw"
              style={{ objectPosition: exclusivo.foto.posicao }}
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 px-[clamp(8px,2vw,24px)] pt-3 pb-5">
            <RotuloDeSecao>{exclusivo.rotulo}</RotuloDeSecao>
            <p className="m-0 text-[clamp(26px,2.6vw,34px)] leading-[1.15] font-medium text-pretty text-petroleo">
              {exclusivo.destaque}
            </p>
            <p className="m-0 text-leitura leading-[1.65] text-pretty">
              {exclusivo.texto}
            </p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              <span className="text-[19px] font-medium text-petroleo">
                {exclusivo.nome}
              </span>
              <span className="text-corpo text-azul-escuro">
                {exclusivo.titulos}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SecaoPagina>
  );
}
