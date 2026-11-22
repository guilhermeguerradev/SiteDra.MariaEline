// Textos do rodapé. Fonte: docs/design/Site Completo.dc.html e PRD (seção 3).
// O aviso sobre planos foi definido pela dona do projeto (DECISOES D16).
export const rodape = {
  nome: "Dra. Maria Eline Muniz",
  descricao: "Cirurgiã-Dentista | Saúde da Família",
  cro: "CRO-MG 64493",
  aviso: "Atendimento particular, sem convênios",
  responsavel: "Responsável técnica: Dra. Maria Eline Muniz · CRO-MG 64493",
} as const;

export function direitosReservados(
  ano: number = new Date().getFullYear(),
): string {
  return `© ${ano} Dra. Maria Eline Muniz. Todos os direitos reservados.`;
}
