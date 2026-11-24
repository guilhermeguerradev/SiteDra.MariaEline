import Image from "next/image";
import { ItensDeCredencial } from "@/src/components/ui/ItensDeCredencial";
import { sobre } from "@/src/content/sobre";
import { ParagrafoComDestaque } from "@/src/components/ui/ParagrafoComDestaque";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";

export function SobreCompacta() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-16 largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto flex flex-col gap-[22px]">
        <div className="revelar grid grid-cols-[140px_minmax(0,1fr)] items-end gap-4">
          <div className="revelar-foto relative aspect-[4/5] overflow-hidden rounded-cartao-compacto shadow-[0_14px_30px_rgb(35_63_69/0.14)]">
            <Image
              src={sobre.foto.src}
              alt={sobre.foto.alt}
              width={sobre.foto.largura}
              height={sobre.foto.altura}
              sizes="140px"
              className="size-full object-cover object-[50%_30%]"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <RotuloDeSecao tamanho="pequeno">{sobre.rotulo}</RotuloDeSecao>
            <h2
              id="titulo-sobre-compacta"
              className="m-0 text-[26px] leading-[1.1] font-medium tracking-[-0.01em] text-pretty text-petroleo"
            >
              {sobre.titulo}
            </h2>
          </div>
        </div>

        <div className="revelar flex flex-col gap-3">
          {sobre.paragrafos.map((trechos) => (
            <ParagrafoComDestaque
              key={trechos[0].texto}
              trechos={trechos}
              className="text-base leading-[1.6]"
            />
          ))}
        </div>

        <ul className="revelar m-0 grid list-none grid-cols-2 gap-2 p-0">
          <ItensDeCredencial
            credenciais={sobre.credenciais}
            className="rounded-[14px] bg-gelo px-3 py-2.5 text-miudo leading-[1.3] text-petroleo"
          />
        </ul>
        <ul className="revelar m-0 list-none self-start p-0">
          <li className="rounded-full border border-azul px-3.5 py-2 text-miudo text-petroleo">
            {sobre.registro}
          </li>
        </ul>
      </div>
    </div>
  );
}
