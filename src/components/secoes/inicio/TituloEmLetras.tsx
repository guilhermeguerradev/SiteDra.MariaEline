import { atrasoDeAnimacao } from "@/src/lib/animacao";
import { TEMPOS_DE_ENTRADA } from "./temposDeEntrada";

// Sem isto o navegador "engole" o espaço entre as palavras, porque cada letra
// fica numa caixa própria.
const ESPACO_SEM_QUEBRA = "\u00a0";

type Props = {
  texto: string;
  /** Posição da linha no título (0 é a primeira). */
  indiceDaLinha: number;
  /** Quantas letras já foram escritas nas linhas anteriores. */
  letrasAnteriores: number;
};

// Uma linha do título em letras soltas, que entram uma a uma. O texto completo
// fica só para leitores de tela; as letras são decorativas.
export function TituloEmLetras({
  texto,
  indiceDaLinha,
  letrasAnteriores,
}: Props) {
  return (
    <>
      <span className="sr-only">{texto}</span>
      <span aria-hidden="true">
        {[...texto].map((letra, posicao) => (
          <span
            key={`${letra}-${posicao}`}
            style={atrasoDeAnimacao(
              TEMPOS_DE_ENTRADA.letra(
                indiceDaLinha,
                letrasAnteriores + posicao,
              ),
            )}
            className="animar-letra"
          >
            {letra === " " ? ESPACO_SEM_QUEBRA : letra}
          </span>
        ))}
      </span>
    </>
  );
}
