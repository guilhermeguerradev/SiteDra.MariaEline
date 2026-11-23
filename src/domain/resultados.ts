export type Imagem = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
};

export type CasoEmpilhado = {
  imagem: Imagem;
  legenda: string;
  /** Há "Antes" na metade de cima e "Depois" na de baixo. */
  antesDepois: boolean;
};

// Textos da seção Resultados. Fonte: docs/design/Site Completo.dc.html, usados a
// pedido da dona do projeto (DECISOES D25). 🔴 Imagens de resultado só podem ser
// divulgadas com TCLE de cada paciente (DECISOES D23). As fotos são recortes só
// dos dentes, sem textos, legendas nem perfis de terceiros.
export const resultados = {
  rotulo: "Resultados",
  titulo: "Sorrisos cuidados no consultório",
  clareamento: {
    rotulo: "Clareamento dental",
    destaque: "Dentes mais claros, com naturalidade e segurança.",
    legenda:
      "Resultado de apenas 1 semana de clareamento caseiro, com acompanhamento profissional e a colaboração do paciente.",
    par: {
      src: "/images/clareamento-par.webp",
      alt: "Antes e depois de clareamento",
      largura: 1400,
      altura: 374,
    },
    antes: {
      src: "/images/clareamento-antes.webp",
      alt: "Clareamento caseiro, antes",
      largura: 760,
      altura: 355,
    },
    depois: {
      src: "/images/clareamento-depois.webp",
      alt: "Clareamento caseiro, depois",
      largura: 760,
      altura: 355,
    },
    rotuloAntes: "Antes",
    rotuloDepois: "Depois",
    rotuloDepoisSemana: "Depois · 1 semana",
  },
  casos: [
    {
      imagem: {
        src: "/images/limpeza.webp",
        alt: "Antes e depois de limpeza",
        largura: 600,
        altura: 800,
      },
      legenda: "Limpeza · antes e depois",
      antesDepois: true,
    },
    {
      imagem: {
        src: "/images/restauracao.webp",
        alt: "Antes e depois de restauração",
        largura: 570,
        altura: 760,
      },
      legenda: "Restaurações",
      antesDepois: true,
    },
    {
      imagem: {
        src: "/images/extracao.webp",
        alt: "Radiografia panorâmica e dentes removidos em uma extração de sisos",
        largura: 1000,
        altura: 1101,
      },
      legenda: "Extração de sisos",
      antesDepois: false,
    },
  ] satisfies readonly CasoEmpilhado[],
} as const;
