// Coreografia de entrada do início, em milissegundos desde a abertura da
// página. Os valores seguem o design; mudar um aqui muda só o seu momento.
export const TEMPOS_DE_ENTRADA = {
  selo: 550,
  frase: 1050,
  botao: 1180,
  /** A primeira linha do título entra, e a seguinte vem 160 ms depois. */
  linha: (indice: number) => 650 + indice * 160,
  /** As letras começam logo depois da linha e entram uma a cada 38 ms. */
  letra: (indiceDaLinha: number, posicaoNoTitulo: number) =>
    700 + indiceDaLinha * 160 + posicaoNoTitulo * 38,
  /** Cada selo flutuante entra 160 ms depois do anterior. */
  seloFlutuante: (indice: number) => 1350 + indice * 160,
} as const;
