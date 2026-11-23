import { contato, urlMapaIncorporado } from "@/src/domain/contato";
import { contatos } from "@/src/domain/contatos";
import { montarLinkMapa } from "@/src/domain/formatacao";

function IconeLocal() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

type Props = { className?: string };

export function MapaConsultorio({
  className = "min-h-[300px] flex-1 rounded-[28px]",
}: Props) {
  return (
    <div className={`relative overflow-hidden bg-petroleo-claro ${className}`}>
      <iframe
        src={urlMapaIncorporado}
        title={contato.mapaTitulo}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 size-full border-0 saturate-[.85]"
      />
      <a
        href={montarLinkMapa(contatos.endereco)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3.5 bottom-3.5 left-3.5 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[18px] bg-creme/95 px-4 py-3 text-petroleo shadow-[0_10px_30px_rgb(0_0_0/0.18)] backdrop-blur-[10px]"
      >
        <span
          aria-hidden="true"
          className="flex size-9 flex-none items-center justify-center rounded-full bg-petroleo text-menta"
        >
          <IconeLocal />
        </span>
        <span className="flex min-w-[150px] flex-1 flex-col gap-0.5">
          <span className="text-[15px] font-semibold">{contato.predio}</span>
          <span className="text-[13px]">
            {contato.sala} · {contatos.endereco.logradouro}
          </span>
        </span>
        <span className="ml-auto text-[13px] font-medium whitespace-nowrap">
          {contato.abrirRota}
        </span>
      </a>
    </div>
  );
}
