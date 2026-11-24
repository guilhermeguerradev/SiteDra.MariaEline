import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { secaoContato, instagramUsuario } from "@/src/content/secaoContato";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { formatarTelefone } from "@/src/lib/formatacao";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeWhatsapp } from "@/src/components/ui/IconeWhatsapp";
import { MapaConsultorio } from "@/src/components/secoes/contato/MapaConsultorio";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

const caixa =
  "flex flex-col gap-1 rounded-2xl border border-menta/20 bg-creme/[.07] p-3.5";
const rotulo = "text-[11px] tracking-[.1em] text-menta uppercase";
const valor = "text-corpo text-creme hover:text-menta focus-visible:text-menta";

export function ContatoCompacta() {
  const { logradouro, bairro, cidade, uf } = dadosDeContato.endereco;

  return (
    <div className="flex min-h-dvh flex-col justify-center px-3.5 py-14 largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto revelar relative flex flex-col gap-[22px] overflow-clip rounded-cartao bg-petroleo px-[18px] pt-7 pb-[18px]">
        <div className="flex flex-col gap-3.5 px-1">
          <RotuloDeSecao tamanho="medio" fundo="escuro">
            {secaoContato.rotulo}
          </RotuloDeSecao>
          <h2
            id="titulo-contato-compacta"
            className="m-0 text-[34px] leading-[1.05] font-medium tracking-[-0.02em] text-pretty text-creme"
          >
            {secaoContato.titulo}
          </h2>
          <p className="m-0 text-corpo leading-[1.55] text-creme/80">
            {secaoContato.texto}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <LinkExterno
            href={linkWhatsapp}
            preenche="var(--color-creme)"
            className="botao-preenche col-span-2 flex items-center justify-center gap-2.5 rounded-full bg-menta px-5 py-[17px] text-leitura font-semibold text-petroleo"
          >
            <IconeWhatsapp tamanho={22} />
            {secaoContato.botao}
          </LinkExterno>
          <div className={caixa}>
            <span className={rotulo}>WhatsApp</span>
            <LinkExterno href={linkWhatsapp} className={valor}>
              {formatarTelefone(dadosDeContato.whatsapp)}
            </LinkExterno>
          </div>
          <div className={caixa}>
            <span className={rotulo}>{secaoContato.instagram}</span>
            <LinkExterno
              href={dadosDeContato.instagram}
              aria-label={`${secaoContato.instagram} ${instagramUsuario}`}
              className={valor}
            >
              {instagramUsuario}
            </LinkExterno>
          </div>
          <div className={`${caixa} col-span-2`}>
            <span className={rotulo}>Endereço</span>
            <span className="text-corpo leading-[1.45] text-creme">
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

        <MapaConsultorio className="h-[260px] rounded-cartao-compacto" />
      </div>
    </div>
  );
}
