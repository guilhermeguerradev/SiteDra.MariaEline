import { contato, linhasEndereco } from "@/src/domain/contato";
import { contatos } from "@/src/domain/contatos";
import { formatarTelefone } from "@/src/domain/formatacao";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";
import { IconeWhatsapp } from "./IconeWhatsapp";
import { MapaConsultorio } from "./MapaConsultorio";
import { ContatoCelular } from "./celular/ContatoCelular";

const linkWhatsapp = montarLinkWhatsapp(contatos.whatsapp);

const rotulo = "text-[13px] tracking-[.1em] text-menta uppercase";
const valor = "text-[17px] leading-normal";

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="scroll-mt-5 nav:scroll-mt-20 bg-[linear-gradient(120deg,var(--color-ceu)_0%,var(--color-creme)_50%,var(--color-pessego)_100%)]"
    >
      <ContatoCelular />
      <div className="hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <div className="revelar relative mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(40px,5vw,72px)] overflow-clip rounded-[clamp(28px,4vw,48px)] bg-petroleo p-[clamp(32px,6vw,80px)]">
          <svg
            viewBox="0 0 1240 600"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
            className="desenhar-linha pointer-events-none absolute inset-0 size-full opacity-[.14]"
          >
            <path
              d="M-40 500 C 240 380, 420 600, 660 460 S 1040 260, 1280 360"
              stroke="currentColor"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              className="text-menta"
            />
          </svg>

          <div className="relative flex flex-col items-start gap-6">
            <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-menta uppercase">
              {contato.rotulo}
            </span>
            <h2
              id="titulo-contato"
              className="m-0 text-[clamp(40px,5vw,68px)] leading-none font-medium tracking-[-0.02em] text-pretty text-creme"
            >
              {contato.titulo}
            </h2>
            <p className="m-0 max-w-[440px] text-lg leading-relaxed text-creme/80">
              {contato.texto}
            </p>
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={
                { "--preenche": "var(--color-creme)" } as React.CSSProperties
              }
              className="botao-preenche flex items-center gap-3.5 rounded-full bg-menta px-9 py-[22px] text-[19px] font-semibold text-petroleo"
            >
              <span className="flex-none">
                <IconeWhatsapp tamanho={26} />
              </span>
              {contato.botao}
            </a>
            <div className="mt-2 flex flex-wrap gap-2.5">
              <a
                href={contatos.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  { "--preenche": "var(--color-menta)" } as React.CSSProperties
                }
                className="botao-preenche rounded-full border border-menta/45 px-5 py-2.5 text-[15px] text-creme hover:text-petroleo focus-visible:text-petroleo"
              >
                {contato.instagram}
              </a>
            </div>
          </div>

          <div className="relative flex flex-col gap-5">
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 text-creme">
              <div className="flex flex-col gap-1.5">
                <dt className={rotulo}>Endereço</dt>
                <dd className={`m-0 ${valor}`}>
                  {linhasEndereco().map((linha, i) => (
                    <span key={linha} className="block">
                      {linha}
                      {i < 2 && <span className="sr-only">,</span>}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className={rotulo}>Atendimento</dt>
                <dd className={`m-0 ${valor}`}>{contato.atendimento}</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className={rotulo}>WhatsApp</dt>
                <dd className="m-0">
                  <a
                    href={linkWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${valor} text-creme hover:text-menta focus-visible:text-menta`}
                  >
                    {formatarTelefone(contatos.whatsapp)}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className={rotulo}>E-mail</dt>
                <dd className="m-0">
                  <a
                    href={`mailto:${contatos.email}`}
                    className={`${valor} break-all text-creme hover:text-menta focus-visible:text-menta`}
                  >
                    {contatos.email}
                  </a>
                </dd>
              </div>
            </dl>
            <MapaConsultorio />
          </div>
        </div>
      </div>
    </section>
  );
}
