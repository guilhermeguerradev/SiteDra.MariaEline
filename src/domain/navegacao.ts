export type ItemNavegacao = {
  rotulo: string;
  secao: string;
};

// Todas as seções previstas no design, na ordem do menu.
export const itensNavegacao: readonly ItemNavegacao[] = [
  { rotulo: "Tratamentos", secao: "tratamentos" },
  { rotulo: "Sobre", secao: "sobre" },
  { rotulo: "Família", secao: "familia" },
  { rotulo: "Depoimentos", secao: "depoimentos" },
  { rotulo: "Dúvidas", secao: "duvidas" },
  { rotulo: "Contato", secao: "contato" },
];

// Seções que existem na página hoje (PRD, seção 6: não linkar seção inexistente).
// Ao criar uma seção nova, acrescente o id aqui e o link aparece no menu.
export const secoesExistentes: readonly string[] = ["inicio"];

export function secaoExiste(id: string): boolean {
  return secoesExistentes.includes(id);
}

export function itensVisiveis(
  itens: readonly ItemNavegacao[] = itensNavegacao,
  existentes: readonly string[] = secoesExistentes,
): ItemNavegacao[] {
  return itens.filter((item) => existentes.includes(item.secao));
}
