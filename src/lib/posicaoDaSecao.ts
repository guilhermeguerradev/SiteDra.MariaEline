/** Espaço mínimo, em pixels, entre o cabeçalho e o começo do conteúdo. */
export const MARGEM_MINIMA = 24;

/** O quanto o conteúdo sobe acima do centro: no máximo 40 px, ou 4% da tela. */
const VIES_MAXIMO = 40;
const VIES_PROPORCAO = 0.04;

export type MedidasDaSecao = {
  /** Distância do começo do conteúdo até o topo da página, em pixels. */
  topoDoConteudo: number;
  alturaDoConteudo: number;
  alturaDaTela: number;
  alturaDoCabecalho: number;
  /** Se verdadeiro, o conteúdo fica no centro exato, sem subir um pouco. */
  centroExato: boolean;
};

/**
 * Posição de rolagem em que o conteúdo da seção fica centralizado na área livre
 * sob o cabeçalho. Se o conteúdo não cabe nessa área, ele para logo abaixo do
 * cabeçalho, com a margem mínima.
 */
export function calcularTopoDaSecao(medidas: MedidasDaSecao): number {
  const areaLivre = medidas.alturaDaTela - medidas.alturaDoCabecalho;
  const vies = medidas.centroExato
    ? 0
    : Math.min(VIES_MAXIMO, areaLivre * VIES_PROPORCAO);
  const folga = Math.max(
    MARGEM_MINIMA,
    (areaLivre - medidas.alturaDoConteudo) / 2 - vies,
  );
  const topo = medidas.topoDoConteudo - medidas.alturaDoCabecalho - folga;
  return Math.max(0, topo);
}
