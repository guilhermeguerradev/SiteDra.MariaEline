import { secaoContato, instagramUsuario } from "@/src/content/secaoContato";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { formatarTelefone } from "@/src/lib/formatacao";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeWhatsapp } from "@/src/components/ui/IconeWhatsapp";
import { MapaConsultorio } from "@/src/components/secoes/contato/MapaConsultorio";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

const caixa =
  "flex flex-col gap-1 rounded-2xl border border-menta/20 bg-creme/[.07] p-3.5";
const rotulo = "text-[11px] tracking-[.1em] text-menta uppercase";
const valor =
  "text-[15px] text-creme hover:text-menta focus-visible:text-menta";

export function ContatoCelular() {
  const { logradouro, bairro, cidade, uf } = dadosDeContato.endereco;

  return (
    <div className="flex min-h-dvh flex-col justify-center px-3.5 py-14 nav:hidden">
      <div className="mx-auto w-full max-w-[640px] revelar relative flex flex-col gap-[22px] overflow-clip rounded-[28px] bg-petroleo px-[18px] pt-7 pb-[18px]">
        <div className="flex flex-col gap-3.5 px-1">
          <span className="text-[13px] font-medium animar-rotulo tracking-[.14em] text-menta uppercase">
            {secaoContato.rotulo}
          </span>
          <h2
            id="titulo-contato-celular"
            className="m-0 text-[34px] leading-[1.05] font-medium tracking-[-0.02em] text-pretty text-creme"
          >
            {secaoContato.titulo}
          </h2>
          <p className="m-0 text-[15px] leading-[1.55] text-creme/80">
            {secaoContato.texto}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={
              { "--preenche": "var(--color-creme)" } as React.CSSProperties
            }
            className="botao-preenche col-span-2 flex items-center justify-center gap-2.5 rounded-full bg-menta px-5 py-[17px] text-[17px] font-semibold text-petroleo"
          >
            <IconeWhatsapp tamanho={22} />
            {secaoContato.botao}
          </a>
          <div className={caixa}>
            <span className={rotulo}>WhatsApp</span>
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={valor}
            >
              {formatarTelefone(dadosDeContato.whatsapp)}
            </a>
          </div>
          <div className={caixa}>
            <span className={rotulo}>{secaoContato.instagram}</span>
            <a
              href={dadosDeContato.instagram}
              aria-label={`${secaoContato.instagram} ${instagramUsuario}`}
              target="_blank"
              rel="noopener noreferrer"
              className={valor}
            >
              {instagramUsuario}
            </a>
          </div>
          <div className={`${caixa} col-span-2`}>
            <span className={rotulo}>Endereço</span>
            <span className="text-[15px] leading-[1.45] text-creme">
              {logradouro} · {secaoContato.sala}
              <br />
              {secaoContato.predio} · {bairro}, {cidade} – {uf}
            </span>
          </div>
          <div className={`${caixa} col-span-2`}>
            <span className={rotulo}>E-mail</span>
            <a
              href={`mailto:${dadosDeContato.email}`}
              className={`${valor} break-all`}
            >
              {dadosDeContato.email}
            </a>
          </div>
        </div>

        <MapaConsultorio className="h-[260px] rounded-[20px]" />
      </div>
    </div>
  );
}
