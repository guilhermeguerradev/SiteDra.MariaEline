export type Beneficio = {
  numero: string;
  titulo: string;
  descricao: string;
};

// Textos da seção "Por que prevenir?". Fonte: docs/design/Site Completo.dc.html,
// usados a pedido da dona do projeto (DECISOES D21). 🔴 A Dra. deve revisar
// frases que possam ser lidas como promessa de resultado ou de economia.
export const secaoPrevenir = {
  rotulo: "Por que prevenir?",
  titulo: "O cuidado de hoje é o sorriso de amanhã.",
} as const;

export const beneficios: readonly Beneficio[] = [
  {
    numero: "01",
    titulo: "Evita dor",
    descricao: "Problemas descobertos cedo raramente chegam a doer.",
  },
  {
    numero: "02",
    titulo: "Evita tratamentos maiores",
    descricao: "Uma pequena restauração hoje evita um canal amanhã.",
  },
  {
    numero: "03",
    titulo: "Economiza",
    descricao: "Prevenir custa bem menos do que tratar depois.",
  },
  {
    numero: "04",
    titulo: "Sorriso saudável por mais tempo",
    descricao: "Acompanhamento contínuo em todas as fases da vida.",
  },
];
