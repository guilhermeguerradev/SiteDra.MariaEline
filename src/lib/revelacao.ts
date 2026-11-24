// Nomes usados pela animação "aparecer ao rolar". O CSS que as define está em
// src/styles/animacoes-rolagem.css; um teste confere que os dois concordam.

/** Classes que marcam o que deve aparecer ao entrar na tela. */
export const CLASSES_DE_REVELACAO = {
  /** Bloco de conteúdo: sobe e aparece. */
  bloco: "revelar",
  /** Foto: abre por uma janela e a imagem desce do zoom. */
  foto: "revelar-foto",
  /** Rótulo de seção: abre o espaço entre as letras. */
  rotulo: "animar-rotulo",
  /** Linha decorativa: é desenhada da esquerda para a direita. */
  linha: "desenhar-linha",
} as const;

/** Colocada na página inteira quando a animação está ligada; esconde os blocos. */
export const CLASSE_ANIMACAO_LIGADA = "animacao-ligada";

/** Colocada em cada bloco que já entrou na tela; dispara a sua animação. */
export const CLASSE_BLOCO_VISIVEL = "bloco-visivel";

/** Seletor que encontra tudo o que precisa ser observado. */
export const SELETOR_DOS_REVELAVEIS = Object.values(CLASSES_DE_REVELACAO)
  .map((classe) => `.${classe}`)
  .join(", ");
