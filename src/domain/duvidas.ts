export type Pergunta = {
  pergunta: string;
  resposta: string;
};

// Textos da seção Dúvidas frequentes. Fonte: docs/design/Site Completo.dc.html,
// usados a pedido da dona do projeto (DECISOES D21). 🔴 A Dra. deve revisar as
// respostas sobre siso e clareamento, que tratam de saúde.
export const secaoDuvidas = {
  rotulo: "Dúvidas frequentes",
  titulo: "Perguntas que a gente ouve bastante",
  antesDoLink: "Não encontrou a sua? Mande uma mensagem pelo ",
  link: "WhatsApp",
  depoisDoLink: ".",
} as const;

export const perguntas: readonly Pergunta[] = [
  {
    pergunta: "Com que frequência devo ir ao dentista?",
    resposta:
      "Em geral, a cada 6 meses. Dependendo da sua saúde bucal, posso indicar um intervalo diferente. O importante é manter o acompanhamento.",
  },
  {
    pergunta: "A partir de que idade meu filho deve ir ao dentista?",
    resposta:
      "A primeira consulta é recomendada quando nasce o primeiro dentinho, ou até o primeiro ano de vida. Quanto mais cedo, mais natural fica a relação com o dentista.",
  },
  {
    pergunta: "A extração do siso dói?",
    resposta:
      "O procedimento é feito com anestesia, então você não sente dor durante. Depois, um desconforto leve é normal e fica sob controle com as orientações e a medicação indicadas.",
  },
  {
    pergunta: "Clareamento enfraquece os dentes?",
    resposta:
      "Não. Feito com avaliação e acompanhamento profissional, o clareamento é seguro. Uma sensibilidade passageira pode acontecer e é orientada durante o tratamento.",
  },
  {
    pergunta: "Tenho muito medo de dentista. Como funciona?",
    resposta:
      "Tudo começa com uma conversa. Explico cada etapa antes de fazer, você pode pedir pausas e o atendimento segue no seu ritmo.",
  },
];
