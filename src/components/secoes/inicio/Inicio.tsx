import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { inicio } from "@/src/content/inicio";
import { secaoExiste } from "@/src/content/navegacao";
import { atrasoDeAnimacao } from "@/src/lib/animacao";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { DicaDeRolagem } from "./DicaDeRolagem";
import { FundoDoInicio } from "./FundoDoInicio";
import { SelosFlutuantes } from "./SelosFlutuantes";
import { TEMPOS_DE_ENTRADA } from "./temposDeEntrada";
import { TituloEmLetras } from "./TituloEmLetras";

const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

export function Inicio() {
  const letrasDaPrimeiraLinha = [...inicio.tituloLeve].length;

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-petroleo largo:min-h-[max(100dvh,560px)] largo:justify-center"
    >
      <FundoDoInicio />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 pb-9 largo:px-gutter largo:pt-[clamp(120px,19vh,210px)] largo:pb-[clamp(56px,11vh,120px)]">
        <div className="flex max-w-[560px] flex-col items-start gap-7">
          <span
            style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.selo)}
            className="animar-selo rounded-full border border-menta/45 px-[18px] py-2 text-sm tracking-[.04em] text-menta"
          >
            {inicio.selo}
          </span>

          <h1 className="m-0 flex flex-col text-[clamp(46px,min(7.2vw,12vh),104px)] leading-[.95] font-semibold tracking-[-0.02em] text-creme">
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em]">
              <span
                style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.linha(0))}
                className="animar-linha block font-light text-creme/55"
              >
                <TituloEmLetras
                  texto={inicio.tituloLeve}
                  indiceDaLinha={0}
                  letrasAnteriores={0}
                />
              </span>
            </span>
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em]">
              <span
                style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.linha(1))}
                className="animar-linha block"
              >
                <TituloEmLetras
                  texto={inicio.titulo}
                  indiceDaLinha={1}
                  letrasAnteriores={letrasDaPrimeiraLinha}
                />
              </span>
            </span>
          </h1>

          <p
            style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.frase)}
            className="animar-entrada m-0 max-w-[470px] text-[clamp(18px,1.6vw,22px)] leading-normal text-pretty text-creme/85"
          >
            {inicio.frase}
          </p>

          <div
            style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.botao)}
            className="animar-entrada flex flex-wrap items-center gap-3.5"
          >
            <LinkExterno
              href={linkWhatsapp}
              preenche="var(--color-creme)"
              className="botao-preenche rounded-full bg-menta px-8 py-[18px] text-leitura font-semibold text-petroleo"
            >
              {inicio.botaoPrincipal}
            </LinkExterno>
            <span className="text-corpo text-creme/75">{inicio.publico}</span>
          </div>
        </div>
      </div>

      <SelosFlutuantes />
      {secaoExiste("sobre") && <DicaDeRolagem />}
    </section>
  );
}
