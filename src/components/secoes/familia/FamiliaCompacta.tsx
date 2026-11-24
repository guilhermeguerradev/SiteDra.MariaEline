import Image from "next/image";
import { familia } from "@/src/content/familia";
import { CabecalhoDeSecaoCompacta } from "@/src/components/ui/CabecalhoDeSecaoCompacta";

function IconeSorriso() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c1 1.4 2.2 2 3.5 2s2.5-.6 3.5-2" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  );
}

export function FamiliaCompacta() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-16 largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto flex flex-col gap-[22px]">
        <CabecalhoDeSecaoCompacta
          rotulo={familia.rotulo}
          titulo={familia.titulo}
          idTitulo="titulo-familia-compacta"
          tamanho="medio"
        />

        <div className="revelar grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-2">
          <div className="revelar-foto relative aspect-[1/1.2] overflow-hidden rounded-cartao-compacto">
            <Image
              src={familia.fotoPrincipal.src}
              alt={familia.fotoPrincipal.alt}
              width={familia.fotoPrincipal.largura}
              height={familia.fotoPrincipal.altura}
              sizes="55vw"
              className="size-full object-cover object-[50%_25%]"
            />
          </div>
          <div className="revelar-foto relative overflow-hidden rounded-cartao-compacto">
            <Image
              src={familia.fotoDestaque.src}
              alt={familia.fotoDestaque.alt}
              width={familia.fotoDestaque.largura}
              height={familia.fotoDestaque.altura}
              sizes="40vw"
              className="size-full object-cover object-[50%_25%]"
            />
          </div>
        </div>

        <ul className="revelar m-0 flex list-none flex-col gap-2 p-0">
          {familia.perguntas.map((pergunta) => (
            <li
              key={pergunta}
              className="flex items-center gap-3.5 rounded-moldura border border-petroleo/10 bg-creme px-4 py-3.5 text-corpo leading-[1.35] font-medium text-petroleo"
            >
              <span className="flex size-9 flex-none items-center justify-center rounded-full border border-azul/50 bg-white text-azul-escuro">
                <IconeSorriso />
              </span>
              {pergunta}
            </li>
          ))}
        </ul>

        <div className="revelar flex flex-col gap-3">
          <p className="m-0 text-base leading-[1.6] text-pretty">
            {familia.paragrafos[0]}
          </p>
          <p className="m-0 text-base leading-[1.6] text-petroleo">
            {familia.paragrafos[1]}
          </p>
          <p className="m-0 text-leitura leading-[1.45] font-semibold text-petroleo">
            {familia.fecho}
          </p>
        </div>
      </div>
    </div>
  );
}
