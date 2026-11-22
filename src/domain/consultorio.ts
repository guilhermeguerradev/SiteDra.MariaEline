import { rodape } from "./rodape";

export type FotoConsultorio = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  posicao: string;
};

// Textos da seção Consultório. Fonte: docs/design/Site Completo.dc.html, usados
// a pedido da dona do projeto, com autorização das pessoas fotografadas
// confirmada por ela (DECISOES D22). Os textos alternativos descrevem a cena.
export const consultorio = {
  rotulo: "Consultório",
  titulo: "Um espaço pensado para você se sentir bem",
  fotos: [
    {
      src: "/images/mesa.webp",
      alt: "Dra. Maria Eline escrevendo à mesa do consultório",
      largura: 900,
      altura: 600,
      posicao: "40% 50%",
    },
    {
      src: "/images/atendimento.webp",
      alt: "Dra. Maria Eline atendendo uma paciente",
      largura: 900,
      altura: 600,
      posicao: "50% 50%",
    },
    {
      src: "/images/modelo.webp",
      alt: "Dra. Maria Eline segurando um modelo de arcada dentária",
      largura: 600,
      altura: 900,
      posicao: "50% 50%",
    },
    {
      src: "/images/familia-espelho.webp",
      alt: "Dra. Maria Eline com uma família de pacientes, em selfie no espelho do consultório",
      largura: 900,
      altura: 760,
      posicao: "50% 40%",
    },
  ] satisfies readonly FotoConsultorio[],
  exclusivo: {
    rotulo: "Atendimento exclusivo",
    destaque: "Do agendamento ao retorno, você é atendido sempre por mim.",
    texto:
      "Sem troca de profissional e sem pressa. Acompanho cada paciente de perto, conheço o histórico de cada família e estou disponível para tirar dúvidas também depois da consulta.",
    nome: "Dra. Maria Eline Muniz",
    titulos: `Cirurgiã-Dentista · Saúde da Família · ${rodape.cro}`,
    foto: {
      src: "/images/espelho.webp",
      alt: "Dra. Maria Eline Muniz no consultório",
      largura: 667,
      altura: 1000,
      posicao: "50% 30%",
    },
  },
} as const;
