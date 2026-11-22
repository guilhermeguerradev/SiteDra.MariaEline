export type IdTratamento =
  | "prevencao"
  | "limpeza"
  | "restauracoes"
  | "extracoes"
  | "periodontal"
  | "coroas"
  | "proteses"
  | "clareamento";

export type Tratamento = {
  id: IdTratamento;
  titulo: string;
  descricao: string;
};

// Textos idênticos ao PRD, "Textos já prontos dos tratamentos" (ordem do design).
export const tratamentos: readonly Tratamento[] = [
  {
    id: "prevencao",
    titulo: "Prevenção e check-up",
    descricao:
      "Consultas regulares para acompanhar a saúde bucal e agir antes de qualquer dor.",
  },
  {
    id: "limpeza",
    titulo: "Limpeza (profilaxia)",
    descricao:
      "Remoção de placa e tártaro para gengivas saudáveis e um sorriso mais leve.",
  },
  {
    id: "restauracoes",
    titulo: "Restaurações",
    descricao:
      "Tratamento de cáries com materiais da cor do dente, devolvendo forma e função.",
  },
  {
    id: "extracoes",
    titulo: "Extrações, inclusive de sisos",
    descricao:
      "Procedimentos planejados com cuidado, conforto e orientação em cada etapa.",
  },
  {
    id: "periodontal",
    titulo: "Tratamento periodontal",
    descricao:
      "Cuidado da gengiva para prevenir sangramentos, inflamações e perda dos dentes.",
  },
  {
    id: "coroas",
    titulo: "Coroas",
    descricao:
      "Reconstrução de dentes desgastados ou fragilizados, com aparência natural.",
  },
  {
    id: "proteses",
    titulo: "Próteses",
    descricao:
      "Soluções para repor dentes perdidos e recuperar a mastigação e a confiança.",
  },
  {
    id: "clareamento",
    titulo: "Clareamento dental",
    descricao:
      "Dentes mais claros com segurança, sempre após avaliação profissional.",
  },
];

export const secaoTratamentos = {
  rotulo: "Tratamentos",
  titulo: "Cuidado completo, do check-up à reabilitação",
  botao: "Agendar avaliação +",
} as const;
