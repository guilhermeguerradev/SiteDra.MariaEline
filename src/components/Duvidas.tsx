import { contatos } from "@/src/domain/contatos";
import { perguntas, secaoDuvidas } from "@/src/domain/duvidas";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";

const linkWhatsapp = montarLinkWhatsapp(contatos.whatsapp);

export function Duvidas() {
  return (
    <section
      id="duvidas"
      aria-labelledby="titulo-duvidas"
      className="scroll-mt-24 px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(40px,6vw,96px)]">
        <div className="revelar flex flex-col gap-4">
          <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
            {secaoDuvidas.rotulo}
          </span>
          <h2
            id="titulo-duvidas"
            className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-petroleo"
          >
            {secaoDuvidas.titulo}
          </h2>
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
    </section>
  );
}
