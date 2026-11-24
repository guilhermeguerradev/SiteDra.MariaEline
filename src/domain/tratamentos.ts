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
  // Versão curta usada no celular (design "Site Completo", DECISOES D27).
  celular: { titulo: string; descricao: string };
};

// Textos idênticos ao PRD, "Textos já prontos dos tratamentos" (ordem do design).
export const tratamentos: readonly Tratamento[] = [
  {
    id: "prevencao",
    titulo: "Prevenção e check-up",
    descricao:
      "Consultas regulares para acompanhar a saúde bucal e agir antes de qualquer dor.",
    celular: { titulo: "Check-up", descricao: "Agir antes de qualquer dor." },
  },
  {
    id: "limpeza",
    titulo: "Limpeza (profilaxia)",
    descricao:
      "Remoção de placa e tártaro para gengivas saudáveis e um sorriso mais leve.",
    celular: { titulo: "Limpeza", descricao: "Sem placa e sem tártaro." },
  },
  {
    id: "restauracoes",
    titulo: "Restaurações",
    descricao:
      "Tratamento de cáries com materiais da cor do dente, devolvendo forma e função.",
    celular: { titulo: "Restaurações", descricao: "Na cor do dente." },
  },
  {
    id: "extracoes",
    titulo: "Extrações, inclusive de sisos",
    descricao:
      "Procedimentos planejados com cuidado, conforto e orientação em cada etapa.",
    celular: { titulo: "Extrações", descricao: "Inclusive de sisos." },
  },
  {
    id: "periodontal",
    titulo: "Tratamento periodontal",
    descricao:
      "Cuidado da gengiva para prevenir sangramentos, inflamações e perda dos dentes.",
    celular: {
      titulo: "Tratamento periodontal",
      descricao: "Gengiva saudável e sem sangramento.",
    },
  },
  {
    id: "coroas",
    titulo: "Coroas",
    descricao:
      "Reconstrução de dentes desgastados ou fragilizados, com aparência natural.",
    celular: { titulo: "Coroas", descricao: "Aparência natural." },
  },
  {
    id: "proteses",
    titulo: "Próteses",
    descricao:
      "Soluções para repor dentes perdidos e recuperar a mastigação e a confiança.",
    celular: { titulo: "Próteses", descricao: "De volta à mastigação." },
  },
  {
    id: "clareamento",
    titulo: "Clareamento dental",
    descricao:
      "Dentes mais claros com segurança, sempre após avaliação profissional.",
    celular: {
      titulo: "Clareamento",
      descricao: "Mais claros, com segurança e acompanhamento.",
    },
  },
];

export const secaoTratamentos = {
  rotulo: "Tratamentos",
  titulo: "Cuidado completo, do check-up à reabilitação",
  botao: "Agendar avaliação +",
} as const;

// Agrupamento do celular: três blocos numerados.
export const gruposTratamentos: readonly {
  numero: string;
  titulo: string;
  ids: readonly IdTratamento[];
}[] = [
  { numero: "01", titulo: "Prevenção", ids: ["prevencao", "limpeza"] },
  {
    numero: "02",
    titulo: "Restaurações e cuidados",
    ids: ["restauracoes", "extracoes", "periodontal"],
  },
  {
    numero: "03",
    titulo: "Reabilitação",
    ids: ["coroas", "proteses", "clareamento"],
  },
];

export function buscarTratamento(id: IdTratamento): Tratamento {
  const tratamento = tratamentos.find((t) => t.id === id);
  if (!tratamento) throw new Error(`Tratamento inexistente: ${id}`);
  return tratamento;
}

// Mensagem inicial do WhatsApp nos cartões do celular (texto do design).
export function mensagemTratamento(tratamento: Tratamento): string {
  return `Olá, Dra. Maria Eline! Gostaria de saber mais sobre ${tratamento.celular.titulo.toLowerCase()}.`;
}
