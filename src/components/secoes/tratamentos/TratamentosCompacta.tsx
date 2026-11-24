import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import {
  buscarTratamento,
  gruposTratamentos,
  mensagemTratamento,
  secaoTratamentos,
} from "@/src/content/tratamentos";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeTratamento } from "@/src/components/ui/IconeTratamento";
import { CabecalhoDeSecaoCompacta } from "@/src/components/ui/CabecalhoDeSecaoCompacta";

const cartao =
  "flex h-full rounded-cartao-compacto bg-white p-4 text-petroleo shadow-cartao-compacto";

export function TratamentosCompacta() {
  return (
    <div className="flex min-h-dvh flex-col justify-center px-5 py-secao-compacta largo:hidden">
      <div className="mx-auto w-full max-w-conteudo-compacto flex flex-col gap-8">
        <CabecalhoDeSecaoCompacta
          rotulo={secaoTratamentos.rotulo}
          titulo={secaoTratamentos.titulo}
          idTitulo="titulo-tratamentos-compacta"
        />

        {gruposTratamentos.map((grupo) => (
          <div key={grupo.numero} className="flex flex-col gap-3">
            <div className="flex items-baseline gap-2.5">
              <span
                aria-hidden="true"
                className="text-miudo font-medium tracking-[.08em] text-azul-escuro"
              >
                {grupo.numero}
              </span>
              <h3 className="m-0 text-xl font-medium text-petroleo">
                {grupo.titulo}
              </h3>
            </div>
            <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0">
              {grupo.ids.map((id, indice) => {
                const tratamento = buscarTratamento(id);
                const largo = grupo.ids.length === 3 && indice === 2;
                const link = montarLinkWhatsapp(
                  dadosDeContato.whatsapp,
                  mensagemTratamento(tratamento),
                );
                return (
                  <li
                    key={id}
                    className={`revelar ${largo ? "col-span-2" : ""}`}
                  >
                    <LinkExterno
                      href={link}
                      className={`${cartao} ${
                        largo
                          ? "items-center gap-3.5"
                          : "min-h-[150px] flex-col gap-2.5"
                      }`}
                    >
                      <span
                        className={`flex flex-none items-center justify-center rounded-full bg-gelo ${
                          largo ? "size-11" : "size-10"
                        }`}
                      >
                        <IconeTratamento id={id} />
                      </span>
                      <span
                        className={`flex min-w-0 flex-1 flex-col ${
                          largo ? "gap-[3px]" : "gap-2.5"
                        }`}
                      >
                        <span className="text-base leading-tight font-medium">
                          {tratamento.versaoCurta.titulo}
                        </span>
                        <span className="flex-1 text-miudo leading-[1.4] text-[#3a3a3a]">
                          {tratamento.versaoCurta.descricao}
                        </span>
                        {!largo && (
                          <span className="text-miudo font-medium text-azul-escuro">
                            Saiba mais →
                          </span>
                        )}
                      </span>
                      {largo && (
                        <span
                          aria-hidden="true"
                          className="flex-none text-lg text-azul-escuro"
                        >
                          →
                        </span>
                      )}
                    </LinkExterno>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
