import type { CSSProperties } from "react";

type NomeDeVariavelCss = `--${string}`;

// Transforma um objeto de variáveis CSS em `style`. O TypeScript não conhece
// variáveis personalizadas em CSSProperties, então a conversão fica só aqui.
export function variaveisCss(
  variaveis: Record<NomeDeVariavelCss, string>,
): CSSProperties {
  return variaveis as CSSProperties;
}

// Define o atraso de uma animação de entrada. O CSS (animacoes-inicio.css) lê a
// variável --atraso; assim cada elemento escolhe o momento em que entra.
export function atrasoDeAnimacao(milissegundos: number): CSSProperties {
  return variaveisCss({ "--atraso": `${milissegundos}ms` });
}
