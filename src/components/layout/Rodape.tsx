import { dadosDeContato } from "@/src/content/dadosDeContato";
import {
  formatarEndereco,
  formatarTelefone,
  montarLinkMapa,
} from "@/src/lib/formatacao";
import { itensVisiveis } from "@/src/content/navegacao";
import { direitosReservados, rodape } from "@/src/content/rodape";
import { Logo } from "@/src/components/ui/Logo";

const itens = itensVisiveis();

const titulo = "text-[13px] tracking-[.1em] text-menta uppercase";
const coluna = "flex flex-col gap-2.5 text-[15px]";
const link = "w-fit text-creme/80 hover:text-menta focus-visible:text-menta";

export function Rodape() {
  return (
    <footer
      id="rodape"
      className="bg-petroleo secao-px pt-[72px] pb-10 text-creme"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="flex flex-col gap-0.5">
                <span className="text-lg font-medium">{rodape.nome}</span>
                <span className="text-[13px] text-creme/70">
                  {rodape.descricao}
                </span>
              </span>
            </div>
            <span className="text-[15px] text-menta">{rodape.cro}</span>
            <span className="text-[15px] text-creme/80">{rodape.aviso}</span>
          </div>

          <div className="flex flex-wrap gap-14">
            {itens.length > 0 && (
              <nav aria-label="Rodapé" className={coluna}>
                <span className={titulo}>Navegação</span>
                {itens.map((item) => (
                  <a key={item.secao} href={`#${item.secao}`} className={link}>
                    {item.rotulo}
                  </a>
                ))}
              </nav>
            )}

            <div className={coluna}>
              <span className={titulo}>Contato</span>
              <a href={`tel:+${dadosDeContato.whatsapp}`} className={link}>
                {formatarTelefone(dadosDeContato.whatsapp)}
              </a>
              <a href={`mailto:${dadosDeContato.email}`} className={link}>
                {dadosDeContato.email}
              </a>
              <a
                href={montarLinkMapa(dadosDeContato.endereco)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link} max-w-[280px]`}
              >
                {formatarEndereco(dadosDeContato.endereco)}
              </a>
            </div>

            <div className={coluna}>
              <span className={titulo}>Redes</span>
              <a
                href={dadosDeContato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-menta/20 pt-6 text-[13px] text-creme/70">
          <span>{direitosReservados()}</span>
          <span>{rodape.responsavel}</span>
        </div>
      </div>
    </footer>
  );
}
