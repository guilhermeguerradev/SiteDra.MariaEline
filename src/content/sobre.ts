import { rodape } from "@/src/content/rodape";

export type Trecho = {
  texto: string;
  emDestaque?: boolean;
};

// Textos da seção Sobre. Fonte: docs/design/Site Completo.dc.html, usados a
// pedido da dona do projeto (DECISOES D20). As credenciais precisam ser
// conferidas pela Dra. antes da publicação (regras de publicidade do CFO).
export const sobre = {
  rotulo: "Sobre a Dra. Maria Eline",
  titulo: "Prevenir antes de doer é a minha forma de cuidar.",
  foto: {
    src: "/images/sobre.webp",
    alt: "Dra. Maria Eline analisando um raio-x",
    largura: 854,
    altura: 1280,
  },
  paragrafos: [
    [
      { texto: "Sou cirurgiã-dentista formada pela " },
      { texto: "UFJF", emDestaque: true },
      { texto: ", especialista em " },
      { texto: "Saúde da Família", emDestaque: true },
      { texto: " e preceptora na " },
      { texto: "Faculdade Estácio", emDestaque: true },
      { texto: ", onde acompanho a formação de novos dentistas." },
    ],
    [
      {
        texto:
          "No consultório, sou totalmente dedicada a cada paciente: atendo com atenção, explico cada etapa e cuido do sorriso de ",
      },
      {
        texto: "crianças, adolescentes, adultos e idosos",
        emDestaque: true,
      },
      { texto: " com o mesmo carinho." },
    ],
  ] satisfies readonly (readonly Trecho[])[],
  credenciais: [
    "Odontologia · UFJF",
    "Especialista em Saúde da Família · UFJF/HU",
    "Aperfeiçoamento em Cirurgia Oral · Suprema",
    "Preceptora · Estácio",
  ],
  registro: rodape.cro,
} as const;

export function textoDoParagrafo(trechos: readonly Trecho[]): string {
  return trechos.map((trecho) => trecho.texto).join("");
}
