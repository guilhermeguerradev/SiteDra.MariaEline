import { contatos } from "@/src/domain/contatos";
import { secaoTratamentos, tratamentos } from "@/src/domain/tratamentos";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";
import { IconeTratamento } from "./IconeTratamento";
import { TratamentosCelular } from "./celular/TratamentosCelular";

const linkWhatsapp = montarLinkWhatsapp(contatos.whatsapp);

export function Tratamentos() {
  return (
    <section
      id="tratamentos"
      aria-labelledby="titulo-tratamentos"
      className="scroll-mt-0 nav:scroll-mt-24"
    >
      <TratamentosCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
          <div className="revelar flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[640px] flex-col gap-4">
              <span className="text-sm font-medium tracking-[.14em] text-azul-escuro uppercase">
                {secaoTratamentos.rotulo}
              </span>
              <h2
                id="titulo-tratamentos"
                className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-petroleo"
              >
                {secaoTratamentos.titulo}
              </h2>
            </div>
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={
                { "--preenche": "var(--color-petroleo)" } as React.CSSProperties
              }
              className="botao-preenche rounded-full border border-petroleo/30 px-7 py-4 text-base text-petroleo hover:border-petroleo hover:text-creme focus-visible:border-petroleo focus-visible:text-creme"
            >
              {secaoTratamentos.botao}
            </a>
          </div>

          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-5 p-0">
            {tratamentos.map((tratamento) => (
              <li
                key={tratamento.id}
                className="revelar flex flex-col gap-[18px] rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgb(35_63_69/0.06)] transition-transform duration-300 hover:-translate-y-1.5"
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
      </div>
    </section>
  );
}
