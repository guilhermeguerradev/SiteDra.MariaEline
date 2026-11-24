export type Depoimento = {
  id: string;
  texto: string;
  autor: string;
  // Versão curta (usada no celular), como no design (DECISOES D27).
  versaoCurta: { texto: string; autor: string };
};

// Textos da seção Depoimentos. Fonte: docs/design/Site Completo.dc.html, usados a
// pedido da dona do projeto (DECISOES D25). Nenhum nome é divulgado.
// 🔴 A cartilha consultada não trata de depoimentos (DECISOES D23): a Dra. deve
// confirmar com o CRO-MG e ter a autorização de quem escreveu.
export const secaoDepoimentos = {
  rotulo: "Depoimentos",
  titulo: "O que dizem as famílias",
} as const;

export const depoimentos: readonly Depoimento[] = [
  {
    id: "bruxismo-e-limpeza",
    texto:
      "Estou encantada com a Dra. Maria Eline! Além de ser uma excelente profissional, é muito carinhosa e atenciosa. Cheguei com dor num dente e ela me atendeu de prontidão. A dor passou e ela sempre atenciosa, perguntando se estava tudo bem. Super recomendo!",
    autor: "Paciente · placa de bruxismo e limpeza",
    versaoCurta: {
      texto:
        "Excelente profissional, muito carinhosa e atenciosa. Cheguei com dor e ela me atendeu de prontidão. Super recomendo!",
      autor: "Paciente · bruxismo e limpeza",
    },
  },
  {
    id: "whatsapp-churrasco",
    texto:
      "Só vim aqui pra dizer que hoje comi churrasco e meus dentes não doeram nadica. Você arrasa!",
    autor: "Paciente · via WhatsApp",
    versaoCurta: {
      texto:
        "Hoje comi churrasco e meus dentes não doeram nadica. Você arrasa!",
      autor: "Paciente · WhatsApp",
    },
  },
  {
    id: "filha-instagram",
    texto:
      "Quando o profissional é bom é outro nível, uma simples limpeza. Obrigada por cuidar tão bem da minha mãe.",
    autor: "Filha de paciente · via Instagram",
    versaoCurta: {
      texto:
        "Quando o profissional é bom é outro nível. Obrigada por cuidar tão bem da minha mãe.",
      autor: "Filha de paciente · Instagram",
    },
  },
];
