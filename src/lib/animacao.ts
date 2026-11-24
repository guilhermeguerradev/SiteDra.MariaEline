import type { CSSProperties } from "react";

// Define o atraso de uma animação de entrada. O CSS (animacoes.css) lê a
// variável --atraso; assim cada elemento escolhe o momento em que entra.
export function atrasoDeAnimacao(milissegundos: number): CSSProperties {
  return { "--atraso": `${milissegundos}ms` } as CSSProperties;
}
