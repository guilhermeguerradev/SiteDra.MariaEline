import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { secaoTratamentos, tratamentos } from "@/src/content/tratamentos";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeTratamento } from "@/src/components/ui/IconeTratamento";
import { TratamentosCompacta } from "@/src/components/secoes/tratamentos/TratamentosCompacta";
import { SecaoPagina } from "@/src/components/ui/SecaoPagina";
import { RotuloDeSecao } from "@/src/components/ui/RotuloDeSecao";
import { TituloDeSecao } from "@/src/components/ui/TituloDeSecao";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

export function Tratamentos() {
  return (
    <SecaoPagina
      id="tratamentos"
      idTitulo="titulo-tratamentos"
      compacta={<TratamentosCompacta />}
    >
      <div className="mx-auto flex max-w-conteudo flex-col gap-[clamp(32px,5vh,56px)]">
        <div className="revelar flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-conteudo-compacto flex-col gap-4">
            <RotuloDeSecao>{secaoTratamentos.rotulo}</RotuloDeSecao>
            <TituloDeSecao id="titulo-tratamentos">
              {secaoTratamentos.titulo}
            </TituloDeSecao>
          </div>
          <LinkExterno
            href={linkWhatsapp}
            preenche="var(--color-petroleo)"
            className="botao-preenche rounded-full border border-petroleo/30 px-7 py-4 text-base text-petroleo hover:border-petroleo hover:text-creme focus-visible:border-petroleo focus-visible:text-creme"
          >
            {secaoTratamentos.botao}
          </LinkExterno>
        </div>

        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-5 p-0">
          {tratamentos.map((tratamento) => (
            <li
              key={tratamento.id}
              className="revelar flex flex-col gap-[clamp(12px,1.8vh,18px)] rounded-cartao bg-white p-[clamp(20px,3vh,32px)] shadow-cartao transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-gelo text-petroleo">
                <IconeTratamento id={tratamento.id} />
              </span>
              <h3 className="m-0 text-[21px] font-medium text-petroleo">
                {tratamento.titulo}
              </h3>
              <p className="m-0 text-base leading-relaxed text-pretty">
                {tratamento.descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SecaoPagina>
  );
}
