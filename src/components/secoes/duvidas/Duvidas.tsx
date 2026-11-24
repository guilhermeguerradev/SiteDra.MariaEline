import { dadosDeContato } from "@/src/content/dadosDeContato";
import { perguntas, secaoDuvidas } from "@/src/content/duvidas";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";
import { TituloDeSecao } from "@/src/components/ui/TituloDeSecao";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

export function Duvidas() {
  return (
    <SecaoPagina id="duvidas" idTitulo="titulo-duvidas">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(40px,6vw,96px)]">
        <div className="revelar flex flex-col gap-4">
          <RotuloDeSecao>{secaoDuvidas.rotulo}</RotuloDeSecao>
          <TituloDeSecao id="titulo-duvidas">
            {secaoDuvidas.titulo}
          </TituloDeSecao>
          <p className="m-0 text-lg leading-relaxed text-pretty">
            {secaoDuvidas.antesDoLink}
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-petroleo underline underline-offset-4 hover:text-azul-escuro"
            >
              {secaoDuvidas.link}
            </a>
            {secaoDuvidas.depoisDoLink}
          </p>
        </div>

        <div className="revelar flex flex-col">
          {perguntas.map((item, indice) => (
            <details
              key={item.pergunta}
              name="duvidas"
              open={indice === 0}
              className="group border-b border-petroleo/15"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[26px] text-left text-xl font-medium text-petroleo [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span
                  aria-hidden="true"
                  className="flex size-9 flex-none items-center justify-center rounded-full bg-gelo text-xl font-light transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="m-0 pr-14 pb-[26px] text-[17px] leading-[1.7]">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SecaoPagina>
  );
}
