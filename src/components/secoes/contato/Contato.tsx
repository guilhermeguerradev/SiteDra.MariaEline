import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { secaoContato, linhasEndereco } from "@/src/content/secaoContato";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { formatarTelefone } from "@/src/lib/formatacao";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeWhatsapp } from "@/src/components/ui/IconeWhatsapp";
import { MapaConsultorio } from "@/src/components/secoes/contato/MapaConsultorio";
import { ContatoCompacta } from "@/src/components/secoes/contato/ContatoCompacta";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

const classeDoRotulo = "text-miudo tracking-[.1em] text-menta uppercase";
const classeDoValor = "text-leitura leading-normal";

export function Contato() {
  return (
    <SecaoPagina
      id="contato"
      idTitulo="titulo-contato"
      className="bg-[linear-gradient(120deg,var(--color-ceu)_0%,var(--color-creme)_50%,var(--color-pessego)_100%)]"
      compacta={<ContatoCompacta />}
    >
      <div className="revelar relative mx-auto grid max-w-conteudo grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(40px,5vw,72px)] overflow-clip rounded-[clamp(28px,4vw,48px)] bg-petroleo p-[clamp(32px,6vw,80px)]">
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
          <RotuloDeSecao fundo="escuro">{secaoContato.rotulo}</RotuloDeSecao>
          <h2
            id="titulo-contato"
            className="m-0 text-[clamp(40px,5vw,68px)] leading-none font-medium tracking-[-0.02em] text-pretty text-creme"
          >
            {secaoContato.titulo}
          </h2>
          <p className="m-0 max-w-[440px] text-lg leading-relaxed text-creme/80">
            {secaoContato.texto}
          </p>
          <LinkExterno
            href={linkWhatsapp}
            preenche="var(--color-creme)"
            className="botao-preenche flex items-center gap-3.5 rounded-full bg-menta px-9 py-[22px] text-[19px] font-semibold text-petroleo"
          >
            <span className="flex-none">
              <IconeWhatsapp tamanho={26} />
            </span>
            {secaoContato.botao}
          </LinkExterno>
          <div className="mt-2 flex flex-wrap gap-2.5">
            <LinkExterno
              href={dadosDeContato.instagram}
              preenche="var(--color-menta)"
              className="botao-preenche rounded-full border border-menta/45 px-5 py-2.5 text-corpo text-creme hover:text-petroleo focus-visible:text-petroleo"
            >
              {secaoContato.instagram}
            </LinkExterno>
          </div>
        </div>

        <div className="relative flex flex-col gap-5">
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 text-creme">
            <div className="flex flex-col gap-1.5">
              <dt className={classeDoRotulo}>Endereço</dt>
              <dd className={`m-0 ${classeDoValor}`}>
                {linhasEndereco().map((linha, indice) => (
                  <span key={linha} className="block">
                    {linha}
                    {indice < 2 && <span className="sr-only">,</span>}
                  </span>
                ))}
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className={classeDoRotulo}>Atendimento</dt>
              <dd className={`m-0 ${classeDoValor}`}>
                {secaoContato.atendimento}
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className={classeDoRotulo}>WhatsApp</dt>
              <dd className="m-0">
                <LinkExterno
                  href={linkWhatsapp}
                  className={`${classeDoValor} text-creme hover:text-menta focus-visible:text-menta`}
                >
                  {formatarTelefone(dadosDeContato.whatsapp)}
                </LinkExterno>
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className={classeDoRotulo}>E-mail</dt>
              <dd className="m-0">
                <a
                  href={`mailto:${dadosDeContato.email}`}
                  className={`${classeDoValor} break-all text-creme hover:text-menta focus-visible:text-menta`}
                >
                  {dadosDeContato.email}
                </a>
              </dd>
            </div>
          </dl>
          <MapaConsultorio />
        </div>
      </div>
    </SecaoPagina>
  );
}
